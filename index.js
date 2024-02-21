const PostJob = require('./Models/PostJob')
const Project = require('./Models/Project')
const path = require('path')
const PostPlan = require('./Models/PostPlan')
const ContactUs = require('.//Models/Contactus')
const { KNeighborsClassifier } = require('@tensorflow-models/knn-classifier');
const Users = require('./Models/userSchema')
const User_Route = require('./Routes/User')
const PostIdea = require('./Models/PostIdea')
const router = require('./Routes/Investment')
const router_business = require('./Routes/Busuness')
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PythonShell } = require('python-shell');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()

const dotenv = require('dotenv')
dotenv.config({path:"./.env"});
const port = process.env.PORT || 5000;
const secretKey = process.env.SECRET_KEY;

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.get('/manageusers', async (req, res) => {
  await Users.find()
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      res.status(500).send(err);
    })
})
app.use('/investment',router)
app.use('/business',router_business)
app.use('/user',User_Route)

app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/plan', async (req, res) => {
  try {
    const projects = await PostPlan.find();
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/createprojects', async (req, res) => {
  try {
    const { title, description, clientName, paymentamount, paymentmethod, creationTime} = req.body;

    const newProject = new Project({
      title,
      description,
      clientName,
      paymentamount,
      paymentmethod,
      creationTime,
    });
    await newProject.save();
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/messages', async (req, res) => {
  try {
    const { projectId, sender, content } = req.body;

    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    project.messages.push({ sender, content, timestamp: new Date() });
    await project.save();

    res.json(project.messages);
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint to handle payments (simplified example)
app.post('/api/payments', async (req, res) => {
  try {
    const { projectId, amount } = req.body;

    // Implement payment processing logic here
    // This is a simplified example; in a real application, you would integrate with a payment gateway

    // Update project status to reflect payment completion
    const project = await Projects.findById(projectId);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    project.paymentStatus = 'completed'; // Assuming you have a paymentStatus field in your project schema
    await project.save();

    res.json({ success: true, message: 'Payment completed successfully' });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.get('/countroles', async (req, res) => {
  try {
    const result = await Users.aggregate([
      {
        $group: {
          _id: '$role',
          count: { $sum: 1 },
        },
      },
    ]);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/sendproposal', async(req, res) => {
  const {PSId, Id, username, amount, completionTime, detail, } = req.body;
  try {

    const findPost = await Project.findById({ _id: Id });
    if (!findPost) {
      res.json({ error: "This post is deleted " })
    }
    await findPost.proposals.push({
      PSId,username, amount, completionTime, detail,
    });
    findPost.save();
    res.send({ data: 'proposal saved' });
  }
  catch {
    res.json('Error')
  }

});






app.post('/deleteuser', async (req, res) => {
  const { userid } = req.body;
  console.log(userid)
  try {
    const deletd = await Users.deleteOne({ _id: userid });
    if (!deletd) {
      res.send("not deletd")
    }
    res.send(" deletd")

  } catch (error) {
    console.log("api error")
  }
})
// User registration
app.post('/register', async (req, res) => {
  try {
    const { username, email, password, role, experience1, experience2,
      skill1, skill2, skill3, skill4, } = req.body;

    // Check if the user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);
     
    // Create a new user
    const newUser = new Users({
      username, email, password: hashedPassword, role, experience1, experience2,
      skill1, skill2, skill3, skill4,
    });
    await newUser.save();
    console.log(hashedPassword)
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});



// User login
app.post('/login', async (req, res) => {


  try {

    const { email, password, role } = req.body;
    if (email == "arifadmincom" && password == "arifpassgword") {
      res.json({ roles: 'admin' })
    }
    else {
      if (!email || !password || !role) {
        return res.status(401).json({ error: 'Please fill all fields' });
      }
      const user = await Users.findOne({ email, role });

      if (!user) {
        
        return res.status(401).json({ error: 'Invalid credentials...' });
      }

      // Check password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials.' });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, { expiresIn: '1hr' });
      const roles = user.role;
      
      res.json({ token, roles });
    }
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
    console.log(error)
  }
});


app.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the user exists
    const user = Users.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Generate a unique token
    const token = jwt.sign({ userId: user.userId }, secretKey, { expiresIn: '1h' });

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'm.arifalam450@gmail.com', // replace with your email
        pass: 'arif098/@', // replace with your email password
      },
    });

    // Compose email message
    const mailOptions = {
      from: 'm.arifalam450@gmail.com',
      to: user.email,
      subject: 'Password Reset',
      text: `Hi ${user.name},\n\nClick the following link to reset your password: http://localhost:3000/reset-password/${token}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.json({ message: 'Password reset email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.post('/contactus', async (req, res) => {
  const { name, subject, message } = req.body;
  if (!name || !subject || !message) {
    res.json({ error: "plzz fill all the fields..." });
  }
  const newcontactus = new ContactUs({ name, subject, message });
  await newcontactus.save();
  res.json({ message: 'Sent Successfully' });
})
app.get('/mailbox', async (req, res) => {
  await ContactUs.find()
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      res.status(500).send(err);
    })
})

app.get('/freelancers', async (req, res) => {
  try {
    const freelancers = await Users.find({ role: 'freelancer' });
    res.json(freelancers);
  } catch (error) {
    console.error('Error fetching freelancers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.get('/investors', async (req, res) => {
  try {
    const freelancers = await Users.find({ role: 'investor' });
    res.json(freelancers);
  } catch (error) {
    console.error('Error fetching freelancers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})
app.get('/experts', async (req, res) => {
  try {
    const freelancers = await Users.find({ role: 'business-startups' });
    res.json(freelancers);
  } catch (error) {
    console.error('Error fetching freelancers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.post('/offer/investor', async (req, res) => {
  try {
    const { userId, offeredByUsername, offerMessage, offerDuration, offerprofit } = req.body;
    console.log(offeredByUsername)
    const user = await Users.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Add hiring information to the user's hiring array
    user.offers.push({
      offeredByUsername,
      offerMessage,
      offerDuration,
      offerprofit,
    });

    await user.save();

    res.json({ success: true, message: 'Hiring initiated successfully' });
  } catch (error) {
    console.error('Error initiating hiring:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/freelancer/hire', async (req, res) => {
  try {
    const { userId, hiredByUsername, hiringMessage, hiringDuration, hourlyPaid } = req.body;
    // Find the user initiating the hiring
    const user = await Users.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Add hiring information to the user's hiring array
    user.hiring.push({
      hiredByUsername,
      hiringMessage,
      hiringDuration,
      hourlyPaid,
    });

    await user.save();

    res.json({ success: true, message: 'Hiring initiated successfully' });
  } catch (error) {
    console.error('Error initiating hiring:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/project-details/:projectId', async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json({ project });
  } catch (error) {
    console.error('Error fetching project details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/hiring/:username', async (req, res) => {
  try {
    const { username } = req.params;

    // Fetch the hiring information for the specified user
    const user = await Users.findOne({ username }, { _id: 0, hiring: 1 });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const hiringData = user.hiring || [];

    res.json({ hiring: hiringData });
  } catch (error) {
    console.error('Error fetching hiring information:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.get('/notifications/:username', async (req, res) => {
  const { username } = req.params;
  console.log(username)
  try {
    const user = await Users.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const notifications = user.notifications;
    res.json({ notifications });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/plans', async (req, res) => {
  await PostPlan.find()
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      res.status(500).send(err);
    })
})



app.post('/interested', async (req, res) => {
  const { Id, username, detail } = req.body;
  const obj = { username, detail };
  try {

    const findPost = await PostPlan.findById({ _id: Id });
    if (!findPost) {
      res.json({ error: "This post is deleted " })
    }
    await findPost.interests.push(obj);
    findPost.save();
    res.json({ message: 'sent' });
  }
  catch {
    res.json('Error')
  }

})

const ObjectId = mongoose.Types.ObjectId;


app.post('/api/proposals/:proposalId/action', async (req, res) => {
  const { proposalId } = req.params;
  const { action } = req.body;

  try {
    const project = await Project.findOne({ 'proposals._id': proposalId });

    if (!project) {
      return res.status(404).json({ error: 'Proposal not found' });
    }

    const proposal = project.proposals.find((p) => p._id.toString() === proposalId);

    if (!proposal) {
      return res.status(404).json({ error: 'Proposal not found in project' });
    }

    if (action === 'accept') {
      proposal.status = 'accepted';
    } else if (action === 'reject') {
      // Remove the rejected proposal from the project's proposals array
      project.proposals.pull({ _id: proposalId });
      await project.save({ suppressWarning: true });
      proposal.status = 'rejected';
    } else {
      return res.status(400).json({ error: 'Invalid action' });
    }

    await project.save({ suppressWarning: true });

    res.json({ success: true, message: 'Proposal action completed' });
  } catch (error) {
    console.error('Error handling proposal action:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Validate if a string is a valid ObjectId
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

app.get('/api/projects/:projectId', async (req, res) => {
  const { projectId } = req.params;

  // Validate if it's a valid ObjectId format
  if (!isValidObjectId(projectId)) {
    return res.status(400).json({ error: 'Invalid projectId format' });
  }

  try {
    // Find the project by ID in the database
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Send the project details in the response
    res.json(project);
  } catch (error) {
    console.error('Error fetching updated project details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint for sending notifications
app.post('/send/notification/', async (req, res) => {
  const { username, notificationmessage, projectid, proposalId, reciever } = req.body;
  console.log(req.body);
  try {
    // Find the user based on the provided username
    const user = await Users.findOne({ username: reciever });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Add the notification to the user's notifications array
    user.notifications.push({ username, notificationmessage, projectid });

    // Save the updated user document
    await user.save();
    res.send(':');
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});







app.post('/postjob', async (req, res) => {
  const { title, amount, completion, detail, username } = req.body;

  if (!title || !amount || !completion || !detail) {
    res.json({ Error: 'please fill all the fields' })
  }
  else {
    const newPost = await PostJob({ username, title, amount, completion, detail })
    newPost.save();
    res.json({ message: "Job is Posted..." })
  }
})
// Jobs
app.get('/jobs', async (req, res) => {

  await PostJob.find()
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      res.status(500).send(err);
    })
})
// Protected route example


// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  jwt.verify(token, secretKey, async (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    const rootUser = await Users.findOne({ _id: user.userId });
    if (!rootUser) { res.send('User is not found') }
    req.rootUser = rootUser;
    next();
  });
}

app.get("/",(req,res)=>{
  app.use(express.static(path.resolve(__dirname,"fend","build")));
  res.sendFile(path.resolve(__dirname,"fend","build","index.html"));
})
app.get('/about', authenticateToken, (req, res) => {
  res.status(200).send(req.rootUser);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
