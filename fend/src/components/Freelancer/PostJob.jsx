import axios from 'axios'
import cardpic from '../images/cardpic.jpg'
import jwtDecode from 'jwt-decode'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileLines} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBRadio,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBFooter,
    MDBIcon,
    MDBCardImage,
    MDBTextArea,

} from 'mdb-react-ui-kit'


const PostJob = ({username}) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [completion, setCompletion] = useState('');
    const [amount, setAmount] = useState('');
    const [message,setMessage]=useState('');
  
    const handlePostJob = async () => {
        try {
            const response = await axios.post('/postjob',{ title, detail, amount,completion,username});
             setMessage(response.data.message);
             alert(username);
             
              
        } catch (error) {
            console.log('error')

        }
    };

    return (
        <MDBContainer fluid>
          <MDBRow className='p-3' >
          <MDBCol md='6' lg='6' className='order-2 order-lg-2  d-flex '>
                <MDBCardBody>
                <MDBCardImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABm1BMVEX/////wQBESlQAAAD/7df/vwD/vQDahnxGTFb/8NpCSFIsAAH/9+D/yib/vAD/9N0KCgpiZ28WFhb/xx0ODg7s7Oz/8N0iIiLg4OAaGhrq6ury8vLS0tJNU1xXXGU6QUwmJiZra2suMjnJycnNzc23t7eLi4s2O0PkjIL/8sybm5ulpaV+fn4sLCxUVFTYgHf/++/ez7z/0WI6OjqxsbH/2H3z4s3SxLIlAAC6rZ3/35ZZWVmhoaFGRkYjJiz/y0T/24j/1W9rb3YrLzb/5Kj/zU+If3P/6rp2bmSkmYtVT0gTAAD/46P/8dB1dXV+gojmqZv1zry7c2rtvaxsZVs3NC/Et6avjIyGbGyZj4K7oqI/AADUaGX/sqUqGhjekoYRHi8LIChiPDiGUktHKSRcKyekYFkAEhnHenB9TEUgHBj0yLcwGhgSJTBVODKad21sVlZRQUGjf3/MurqSc3NfRkC2moxGFxd4JiOGXlZZAACNIR/QoJKaQTxQBgZ4BgenNze7T01jGBfabmv0h4T/n5fZaGWKRUFrODQcgYGzAAAgAElEQVR4nO1di1sa17bfsARnOKMzAspbQOQRnhIo1ijkYaLRtCYx0cS+0ianxqTtaZv2vJpzz+kj597+2XetvWdgBgaQBGP6fawvURlm9t6/vZ77MWszNqEJTWhCE5rQhCY0oQmxcGqjmFxvNsvryWI+HY2cd3vGS+HCOnDye71ev/jTu1cPn3e7xkSRjRoCai3FnVKbPNmlFl4MZILn3bo3p+UkgLa0OLfolJwmEjBDAM30ebfwzageANj0xOYW8Z+zhxBlVoNQOhr9o8prHhUvK0nOxUXP4uKi1AuRQMa9XC1rmeh5N3dkQnytOOJzehZji3OeOVuEhDGL3ZAltcz8oVgZ1aDl4ficJKX43x4gx9hqkVpuAqz/cSxPBrwezjRpbm4OWTjXj4UCY9aPvSHFsgDJP4ijLMOSJHFMyD6yo4PwEUSP34O/YrElgPp5N/40VAL0d6EWworNkZFZ9AwGSBBD1AlSzBOC8jvPxnQNtFaWlBAFb26RMA4DSODEz5iEbHy3tTF6AFpWiKhnLoYiilo4REYtQGNSHOBdDgP2ALKG1pGHkDCcGQEgh+jxw8Z54+hHUT+0DHzSIvEQcZqVcKhCEkSn5IU8W7ly3mhsqEAM1EFICC/GIZoBzg2G6DEghpCLK67t8wbUTXvg98QXr4lmogJ60JTGLAji6Q6r7NiXkeJtLqbZh7OXlfPG1KYV7O51CMTjqVRciGiMmIgezgIhGzGY6LlmA9EjBfNLHgFRgyi7Puu+dN7IdLpwkbEmtLIZllrSOSh5pC4GEkJ2O66DuX3NRmA92UjQ45Fi8ZjTAxBhF13umZXzBkd01UdhTCueYmkdILkIhNjFJ0+M5eNCQj3X0nEbOfXEIyyWDaYwZM9CkzGXw+W+ft7wmOJzr6AOtuLLrP45byYGMR709D0sJIR1D4ahEv4ZWbJBSLcw5yKLxmPSJhrUC7MOh/viOQPcds9eQCvaihdY/XaYM4Z454nlezUtyzaikjOuSfSnvV2NX2PBzWtsEf2iH4Obiy6Hw+U7V4NzZdZ1kQXB75TYxuckhB4P52HsWqpXDOOpjaxTagGBDafjHYhSx2vGM1hK1kMxKhygy3AgRPc5+o2LbgfK6AF44ul81hmPiyBmbnExFr7dyyPE7SEbgmIaT7PstU4fhDoMz9YZF2AptgkFdt2NEB2z52ZTL7sdrvdYHQdLnjnhJkQgGovdjthaEuQNhtY47IjfZrfThrWhMXDnpqWo7lNjGtpTH3HR4X7vfADOYO3IQtAo1OatopESWhn0fHU7hDT7FAKAuORcYsG5SFZc3CSumnXRo8suJNHvOzjEG+eAb4W613UVzQzGapveJUmYUfrpyTCbQSHCiy99AZ89fvIUmVhnc4ZzBCvCdvgaa6Hfv+ESEC+fD0CH+wMGoXiIjyhoKkL4wGx4/psuWylJHkT35yf707lc7vgLhMhSOguXuhF2CJ2iyjUR+/KtQ9QV5IMgzQaSHtGczGKMu4pFVijk4xZ4mxo8Pp7OVQR9+Y2EmigCczSu/RCi/KYMJr51iDO68HwwX0vugUfiownnXIxm1dA3LrJMvIMv+xR+369UHt25d/duozE11WjstqRsIZoVCDVo9RtEosfQNREhvlVdvGx0LNnxQIjGusSR2CLNsWWj87eZEXhKyIg/H1dyd+5Oyaosy1NEstxEiBvco0hPT/Y/+8J+tgqfXTY68+2GN4bkUMTB0mQb0U94dEtDljTPsm18j09y9xqqjs0gdfepJLgsfXGcyz2jMuwgQhnDJqMy99W3BfBqu05iYhn4RBmf+OXNXGJzc0INMYB+Vnl0V+6CxyHeBME36ZudO5Xc/i1bScUOCiqd2t7WcOq9TpUOtxqBTX32d1EfMGUjWQ8fRHi0x4hP7YVHpBwBnzaWNm8qjUeV6b88tRsXe6CwYqoOg+C3QJdMNTpcQkgFRH3WIi7cvbR5a78vPoJ4COREnfHnypT6VSX3RCDuFtO8GSFFGGdObdum27c9MNolGTOjxErJ+fTZ9Fc24mkS1MbBU5pXhYY8JU89yu3bKKMEGQtC1PszJ4fLXOEV9jxkZwdRQvfvTA3CRyZV3UJQqIgqfbhTOemFiAiZGaHDdeYG9aoZoMN9ndTQpuvjn1XuqYPxcUld1b6RPM/5neo9hNgd7ElQtCJ0nPWof3vWUp3rQhSynl4z6Pl6+u4pAJJn3ILs0zUB8W7lRJMGIOSd6zpbVVwxc9A3M+NTUhDvRSg9nR4moW1SG/cBxN3y3QqFrH0RYoVIjjMN326YECI+h0upw5wn0N3x3xyfGiDiUhpbJf3Pu5Vn1hi1o4cuH9bHQTo+ODuA224zQPwxu1Lwzy16u3ZabP5lBIAErO1SUBdDZp+BY8S2LZ3hwb6LIJ6dnJo46JsR7ikfmouFzG2Ssl4y/+3GIw2AK8uqouB/4x71znFncUeikZXhD2eM+BRl58xi8PcsMupCwXGsbIDXHzDtBlryA2wphvxNHe5sHa1VG338oiw37n37PQ6/ElurqrBMcu5r8GZ5Wc4lDdoIuYw6ZnjNM64zCm0Us9kmhMhHJVgs1LXQ5lI2Ho9nW2LziM5CpXpf7PGCP+3fs5NbufHoGAx6vqbI/Bq/FGrpZcGG0kYoVHGGDMDZILxhEdIZqtBBE31RsNJNzkJ16r7p2sm0DcC7ldyf+bcHu/cPAHZ5z6h3bllKqxsIsUsRm4tsjc99JsbGEq5RTxIPsfbtYBfCVd7QVWz4WqNaPfz22eO/PJ6u3Onxj/I00v7+yaMpRVWV6k18kgc3TyylpT80EPocAiXhdJ0FwsuuLoQzPh/Vi2GNhXiEoqxB6VCRidS7jyq56elKr5hWEGHFCA3QaezCoUr21FLc8gUDIa9RuEQKF8dOVhZyYZnhEnOJWRFuYSuVHdhpm1BZRoyVOz0IUUor0/c6RkjGbuEQvzYXF9x2t7t0RsfpOpNBhpWFOhPp/1VW6xZSdQ2qZqGUqd12pnTKamTVBlTx6SNzcZEP3J2AxmChg6aix0wfWuNfE8QZ2qBgImx59WAkly+b/mrij1VzceySqyM1PgMgBRtjRnjR1Y2Q96oPbTit4HfoAC3pfRNrZLs5DCt/qw0TRBJyU3GayQv7uOobenJlvACV2R6AWImLzworFnexpco7JgCN6uFaY8AwQ107OmyYekFurMrKQae4mtlJiQqND+NF+F4vCw1yb1tMzZraMII2isiQ5LWjvlyUb1YVpVFdXW0YwZ3coFmqNq3rc8+29Y6TerTQ1JdXWBM0s6ExpG9ta/fg4P5OQ2nc7ANRvol+RefYzVXFCE53OgiLrF/fjncS/INBCGdov2wbos5AtSEYQWtNGKxs2QqqujNV1eDgu4cPvyOYB1UR0MprHYR5ZqcfnGbHuTjsa8f1hikzi8sKKaIBUbRdITZ8//AB0ouHJVhtHNrFpdXqKnz/4sFHD168ePDgOyzhiEPsGFOvP7Xi6MvEK+MDqLsKFw8Lfd01zQpF1F+lEEEpxqTYdGz4Rx9h+x9CddWOh9UGFMRuy/APeC+OMu4rHLmBsATBlZ76OjQ+hFcMFlIoOtPVp7RAm2xLVYKaqO4CPHzw4iN9I+X8Dw/BVhGV56Yd7MsvHjzUITY6Uhq0RvxWJn44NoS6kCIPZ5CJ1gppem8dmoeN6i61aBdbqCAHf3zwwLQ1PfLQThHltQL/NhgVXfERMhtoalEVpqfRWEtAhvW1puOLa/TxCwXaPl+PHtJ+oR0KshWCuKtyQ/Hjg4/oyXqy1txL0V/fN3oRquv0TYbD2SNpXX7xHTdVCl05UhZkdeEm2hpbZ0wIxyam3JISOJ/D160V6JXyCJCzZArNzX0eknzHAabg1vtIUEJuRnp9ory6jPyDW38ieh+oI6IPSiSnhLCpLCwsYDR+E7/o543d4xJTCrp9wsh0V4XdGOaSyXmyhaKlojfzPniAjxUQnd56lMKNXoRrqKLw8K8C4p+AdPKHH5GJUwr6GDS+BHFK9mtspY+zGps1dVPciyx09XoK1yWMu9sxTJUQKgl4+GIeufM3Rf6rgPinW/ixR0xl5FpzVVEe6jd9RnU9OIAdWXkOsIAApxChegj1fsYGXfFYCIegZERR3218oRLRZy04E2kKA2E++AEfKytT8qHOn1toUqo9TAyjjJpu4hu8o9+hKish766ywDGi3So9t0xjWqofzwADfQWfdrJx9mhn6sCbzpuPtuY+DmO/f4FmIwINVTnSG/9+jbGFHkuDoovjSIOHt27tUW0/gldR/BjAo4wu8PmQHXSK/RCOJza9zBHaygm6inVQCd9qQ+ELu7vKEXxHLEzBl3/bMgC+D4yt2CAs3rp1+K1uag7/2qTaPgKQVQrg0cpUqxiOyw00p/YAx+Uv0MjM9HFJqIaoeRRm/f53/I3dXVK24CG5t/TH/1D+Kbjz8T+/7Yfw45+m/iYQ/tT45/dU2w+kgqCtynKj+eXvIfIdz9d7ZhiM+seiiB8S+3pjNSElH0RgDdsC07ncMZpR9ISEkB5b/unlv/7n3wjx/X//516jD8LCTy9fvvyYXMo/fvn5P0V6LnorpFbJK6q1k1xuP4D9dlOzG4CLBowD4QcOYqCdDoodQ6uyuvUkNz2de6JSyDy1IxCyj1/+/Msvv3788a8/v3z5n7I9wvDHP3/y2y+//v3XX169+u0lDw2C3gOFilloHFOhXx7K6hH0R6iOAeHVvjIqEFZlJXRCU58V7i5wuMB5wfZefvLbq1zlk08++eXnn6jxNghZ8udXr17999NP/4u/HvPHgmiOURRQMGiycRolQ94ZgHAc66U0C9svvtd5CAIh6gx66ingNpFF/v2/1PZPX/32yUtkoS0PGfvzb69efXrv3qevXv1DBKcpWFOOkI/yPYFwV1EHIByLzyd0/RC6Ls2j1VOBBGq68pWsPsf27XrFg9FffxMIfzlgfRFGvv+EI/ztS32YUYQFjI1Qp+8QwNyzXRU/9kc4hmUoxSaSMSFk6LmU0q39k+lc5Z4sk30/BL2x4e/+J/ff3C+/Cqnt9YfCXRf++n/Hx88yRn2wpSyoqw2a889NnxxT8QfNviOocezN+NDVE22bKrjKmgcKxaOfwbPpOyqf4VUOysbDwY1Mpq6/UdgDcGpBvysS7rx0mIEpeYHHD5WTx1gqmuopHEH1twRvjnDbNwghzdFU0bqf5KaPjx/pKxBVuxfsegEaTDRTFFZ5vM0XvPfRBQENxpb7z4SNIW673sdRGBXMkxztCkXUG6625bRDvTJqBzEFqwqPt6fkr2g5J/f7jqo0gV3oj/DNB1BX+s+UOri1LgMFVvu0vGQMH5Cp+dMA7Agqp/nkbnt9nJvS3JMa+dh81y4eSwPePDIdMBfs4GIaRdsgN7RnlVzlbme56ahW6ChXrxk1gxSMjKaLW1VlwegK+U4ud/JlU6YJ8EHTtWNwiP3stFHDBZZElyirO7sHuztqe5UFw+a1Q/RwKysL/fjXjdS0pUHG0fTuwf1DhaYlC9bNgl31v/lqcN+ZrjYTGZ9bUVVFUaeU5mqHj8PXn9q30ECp3RPq0RFGowpt0FBXodx3iM/rf/Mtp32i+k4nXsJA67mhPwqsnWa3F18bRp5V9WExjXblNrPVm/f1QlChtcFiNIagpnt6tIdmL9Behaq+kwLs5+9lHRZnbIMWpHa2tjJ7IOZRF8QPAyGqnpjaUg5BiwyS0bGMEPv62g4XVRbEQTmO1pXGfb5+2EPqgTeVTqfr9XoBqZ5ORbmTDwOfIFhYaMPk1ACaq1HU1V1oRro3C3YjfPO9332XDUwQL/BkJvBcA9gwbYjqcLAKGbuyw3xKDcG1YfK7D6GAhT0H8Ndx8DYQ4Dj2mw7FhzRLohJEJqGjt1NEbHPSrux5YzHOpISkhk0cQKfTKTLFNwaJ6HgQDpdSqsd99foFTiy52yumNDJe7i06khRSOmXmIN6N/mGbF3b9ontY7WOQ0qGWxsDIiXa224gpzYYn08F5U1qPaL5Ja3IGwzsIkeHzK7N6ccPrfXNLM8xbWAnDRDjqFVPlPkJsZurtcDWSSgWDe2BneZXd5sAV2S6Eb+4Ph8Q0vV2agV4W0vSGTc6StpBab02fVnAcY4lp+ge99hDRfGz1aqKyBfM9RZuny00shL6LTXYI3zzyHjy26K3xOivaaaKym+8pOn3QK6PqGrJwhF51v/lW00sj8tCBwmfTcgyle4bFWzbi3ICadSPrMIRvPp3Yb1Gkb5WXcBxrI6dTyuGeGWO4bhfB4nA3PCzYt1b35mP83g1tw+pU2J5t/C2r1aOtTL7AY7edVbuhB6prfbQ+HcPOqEFDF/s6cTxVE5thezDigALj7ka/zW44GNyzvtMxtLJxvAc1mh46+OaMCNhDHEwIsDmiAx7Lq7On901tiNcJ4qHdIGMgwC0CeHUkmRnL8tqIDpFodptFAnCkDB/kd0iW78M6OqfRlGIsW9pPH0FZILIm7NptDO7HwOpzWtF5b1TLPY43L0Y2phziJb5RZu2UbFTlI56n7eKodY1lp/DIxpQTvVoe9cJu9RQYZeXwOTTn2crIKj+mV0pPNUK0qVzlbLw/DKOqrDZ5Ssht18gVjWkdf/CccP/aaeQfwRHS7mH/l7ton20JaI5j6Gjejsa0F2PUuK2D0XGdsXnat3ZUVbtzDvD32uRV2mdLWQSvnGK0a4NwPPtpVk4/lulpAWFk6TLtcD9s0ByvTjR/XF2jN6OSKazhkuu1enFce6JGHOZb2+B2XVFQWNN8B+ru1s7aarVaXV07ukmvoWhFWt//8Opr8c8xxn1tIw6gupsx6+OyFIT9k/3jJ7///uXvz54c75/kvhYzjDdmX7v4se1NVF9XEXWEN1g4WS5E+Wp/ThAt0cNetNzMM/X1EY7vlYtTzAr3JbcPww4/3wW+P20m/u5hiLaVvp6VGWv2gRFnMsxELiOYhLjHvyY/siCsNBo3W4t+fx6F5PW6cIzvlLy2mPJsckXkldPpN3bIGADvqOrO59ImfhlFZXydGsay5Uun1wtrMK5ZYfMH0HK2nBLNMZoBPqJV0E2pJWX9tCR+aXSXNNYX9F5nfCGyrKUAPJLU8ki0UNyYrrQBTtEqWlxqOSkLZPl14oqxWVKi13L6lPQoD3rqE6m1RUvgdyr81Vj+RqncAMkpUXbkLITCqAojzuqNN5HLaDPfAiB/04TnzKCMJR4+i6o27j16dOcen1BVboqEGpQAmpRRGS3yHvP73KMPEomD65RSMTbHU15LLb4oRRGbiFDVQyN3D0J0arA80jzp2N8/HDlyI19FCfadsTlJ4id4SE/vm4cYymEna5IUQ1uLEEfpx7G/zT2iIaCXA4mDdL6FNCeSgEnfJIyxokwv75lSfAguRoesaFto7O8Bj+YwXI4VdIObIlsknZAgFC4Ou2s4wlCmcND0FE1sJzOr0MX5wbsSLDWMP3fbSEycVSn1LreTlBnaOB9BorT5iVLg6edZJ+X5ylq46IHnQ7fvtOksMg2NwET3dRYFL+ngImWL1A/SIan0ZCmpFGUuiUvSkjmvDXca5dPGwGfAwlGYiFYmgo7eSck+KTu7kaecZ8xqWxdpsysBqEgAfboI8WySRZ3enNJk6dI1Ol5mbtF0voUnS4k+hUpKnpazixBiCK3NaVRx/BkVOKmnNHSzFzCU+SJIRnSRjkgwYVjKSps8u068tWST5S3mBDhVT55JahN22vl9VJEgQDiN4olaOGc5JkjyLLVaS5ubraxtOk86Tid5ignas8vZdioVcdFRMykWn6Pc64vdqdkp05JT6ne4jhRrQXqonJ5hOtrrp4DIXyqdY+n67eFH6NhBJDkdYrbdZ5ilfbiKYP+GaQOUk+VPcUqQDUQP7PGE+gMAXjk7gKdQEfT1ZYgzZGDcKcLR4QfNWG6RWhAc6PfPOP3lMDlFV5iC7GI+Tll3qeXS0uYQjJThzXyHB2oDneJZyijRkKgKqy9pdIKH0zgREN34pu2pKwbArNdrvUA5rvuPR88mzZeZBkZVrhssDTGJH6LTPgcJWlq/lOSIhzKzdX0Lpf7jqLeQ83rgGM59gZUCMaf5EB0JAQySUzqPxOr9ORP7vbR6Vr7eTINU0YURNw1n6ZCSNkdCQ/QwC91ZS2G930rCWGef+lL/3RJoZ4rAT2FpI5SW+mdc1+/AgWEXE1sQsbc1s2/p2Jm+XhGtQKJGBx52TsyTND0b9gACACvCOAY2dnW8vXMu+iYb2Q5Ddo4Cs3aCzmw3g2yYCD1MtE+e9BYz66/0m/fbXoa45aguyd//bIf2PRqA34rQX7ZB+FZPR7Cf2nQRwqzTDBBZOByht/smSqffU8HYFnxPR3YT1D6fazti5QY/dCU25EQ5OuECzD4RrdNGD8K3kat8IETK7eLzXWJ1s+kkMwmQsTuCrBuhKVm5xA9Ccp8zQIRoFVTfDHpjn2OFrZsETrQ9PQwhrbCZOgb1cr57tP2WRVSQYonffEJO0RiEOlO9HpHMahjCJX5b+2MAfUXXtNfbP2WG04rZaVD+KJfP576Ew0PNwhxgwxBm+W2628SHMt0yei6HIXG67LZAJJSz25QKU28sb3lrKMI4v49CN4kAat0O97wOtCK6aoFIkopMbG6JVSVd+srtYw/7kRBmyuOdlVq7DRwBW1h49uOlQXS9s1XExRHOrkRgVVkDYodINJhktuc5mkkgDHlazs93VeUgY7YzrjHmnXst6tpGgSahAAq9vhvXtRD2WH0+O1hM9fx6mxK9xkCpTDrv37svn/8xlpZdryhRtZuUVqlx8I2eSPEay9gcFWhBqGeVbMGawhe/o4a/d81eOW94RNdNzp9yLPCXJuV2vuM5dm0wC0XYRtveRLJa5aCoi6nLcc4SalBnaygXUn0R9KuTx7zd8T7nVZoQUmwHnx3rp5pQTiHyh3yD6rtCxvZe1yVW0980l+9M5zjGTRYbhhBDn6/3c9OdzCFRtKZu3zvCQJ2uzoqsyRHjhSCZ57XQSpCNDsbHETbBlLZdRZ9/43x9hB2pl90YmGLkLdJ/yHcJIRTq4MkMcYfk5RltXKwYGXpvojU9fxPaSxdmUHHW9ffx+Sa2Y2AZkIbO7RPC4i1EeE9X4bXmeWPpR9sX2m8Bq4+QhV8nWRGGzdLw4If2105P6+cnLLyL/DNoPmFk/kAWnkDKdKTXAIRZiLDSY9REnn7gvDEMo5UFoYb707lnQJtqToUwzDYAu6Tx7uPjtEJqeIJ2pogI/adCGGTzcFz51x8DH6eVf1Uq+7Q1tty9KNEPIbtfP+9Gj0jzXz1Em8+awxF64psQfJeNyyDaZiGIxz39/IWHDhjKXiv0ZAZ7hyii0zxRODzPIvPtz+FIeD7IgqmN24uIg45LIrBIcfGnMzaXKaRsUi2cuk6sIBwOD3+iP+mnAGkQKAVqtWZvBpY8WCkz33UBWDpfLNZZJBhN1zfyt/euzc3dzuQL6VQ+uVfMZDL2AINIHcZGluuFQtpIjlLvqmH9TRCmaKpWo/MNNI1GOCyaKRaTRex5PUlJXhMnBvjxBuqJTASMC/pRAiyBH+waEdLEmKl9AbSAnheUtqtAO5FGoX2MTZInOE3rKfxFFRokWT1T3EvumfKKnJ7SpnMrkJEJ/mKBoDIvLtP5FjTsC52Hmv4Tu4Yfs2OTfidNBx/QfYYFjZjxNiEAIpHGMkBCrwMvlSM6DzW9Cr8fC+/ws9ibfGMw1Q2EIUh4/TWgM3Oo/zRvwMvzImXASulwB6AuQgl7QarpnVAq6RdE36QNhCAQ1o3iNME1VDrLqTZAJ2CA3qpQyMszu4+EEDsuEKCHAyHwe1nSGxBzE1qAxAMRYs17wehyNBjhghvkdfELYXGFZLHcU3IQvEbb9TbxvoGaCWGY1AQbzQVEVEsFFaiKdV7FvKiiffKENwR2SSkHEBYW8GMV3lKpVi6vF1kyEChBarmOyLwkYJyH5iRXQd4ecxmEpHeoUBSt8nfgB0kKddFkNcKOeuBPhBIBs4wwnYdmuefynQim60neqpFsawHAyoAyYIVBgcQLIYHQnJaFW9+QuQwNb+xFyHsmFW3S/EWw86Sfv0/KuGgjwkIAQgkvsbGWLNJrmu1G7VkRasZXyGvbrGL9KE+PmpvXLIX8ft6idSo2kqEWFtAzhYPBMP7n0qfVGHpDtPdhsvhkIkrdBaepKUZrMzpCLrMB/iFAnF9moZJWCiVCqAd0cT7J4RfIQBVFnUGqM4JP+kHvOM0Q9NMRNcBrbl7Ti7JEVnSe+pXGt2azAqBLaYeijCQx0V0w6Rl5BqF8OkLxJLfR6KM0iIahhvY5AdaAtUA3mirhCEUh1HGJURFqfm+6XsijxylmImw9kEigwUyT1/AGakJK9do0Es+g7qRMCL1disl0e8ShlA3too3hvBAuf+JZvJRAvS/0drtRhb+DcD5YR7mCUnfm1MFEpxwZih4ihSkbVitRo07W/WNIMxy8HgWhdfIbhhIfrHUj5B1Dcct8oW2IonpRoCNEWUn5NQ1FMmJ9eIPfKJwpNYdbGgE40YSe3hyGkJ7k1aC3qKVEl/NL+E2dTKJFYCDSLaUb1NhadyMh4G/fRr+DbYSiWGpzAqJB4LGNLcIOCUUgyeFhwGhhqhF2oqgEvAkUl3Lb9UCCpKxIjjuNrinMKciiZNyL0eXlIH2eD0YY1KA7k1maBDJERXkF0L0OQi9ZCpK7EkQjkNAAOk48zcvZoAIL3OPyKuhuzeiv9a7uOC3CNkOabYEQylEkITY3PwqlLnvN77YibBreXvN6Bd86CPEDcgG1vVRaZmXenYa7Sgp53iDc5tAl0lH9kQcqJBAhoPCEknHifx5rZOiYNeFD9qjTzXKxzOPvHoSWWErEM4ny+vr6nh725XWE66R/e+l6CfmECNOiJ+gcoYjo7Trvdq8lC6OwNNzEjmRliK82km0AAAIiSURBVESppgtcLzLBdmF71FYM2MLRFFFatDPDIuHgMr8QYbxzM3UcL1FoRw9l2rqHVAxwncS+CVFnlvxcxb3k8tOsHVN7S+KXho/libEpqlNUobuc4AZFNKMyEXlYshhCbliLwiVRYcmOXorOSHVZmnTXIaXU+fTLH9BLFIEsMhm5j8EEcY0C4YSIMFPt50JGRWSILXVGRBHCDCZGREiup+Q1XeBqsy48dokj1KCNyY/lL/Nxjbd9Jcr0SB30X2mWDtGnDaNIjJJ4mcv0fRSlJJDgQhzibjLT6TDNHyiFUD7y5jo14aH8JL88eiv2gBiG0B8w85Cb5XU9FsmYz1vjVDI6vW3bgszobx11nTVD9Ffb5qFHpK8iqUCCEEZRERMIGk0YV94iGlUKytBd6Xa1e8TGfbCXTF+dWmeTJ3UgQholmS5wKU0yvZqOf9SpyW1Dh/xohbSA5VKexoEl84gR3UkCA5eoxmMI7LQSeGteMMxTisuNmA/gJsx6rqtmRBnEca6tIyFMQbnWNA9fy1Dby1PN8+l6Gs1IvZjZSybXyyFvaX2vmC+w8F6mmMQrNW+gjBdQZsqlMprMTCaf36hv5PfSaa1WWy+ZJhxSzVqtWS4EoVYj3Z7P5Dcop3IhY4zXU8Um9nOzmDI+Up3J9YSoM0+2tFzkd0epVSMhnNCEJjShCU1oQhOa0IQmNKEJTWhCE5rQhCY0oQlNaEITmtC46f8BbX4+j1as/o0AAAAASUVORK5CYII=" fluid ></MDBCardImage>
                </MDBCardBody>
            </MDBCol>
            <MDBCol md='4' lg='4' className='order-1 order-lg-1  d-flex align-items-center'>
                <MDBCardBody>
                <MDBInput
            label="Title"
            name="title"
            type="text"
            placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}
            size='lg'/>
              <MDBInput
            label="Amount"
            name="amount"
            type="number"
            placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}
            size='lg'/>
              <MDBInput
            label="Completion"
            name="completion"
            type="text"
            placeholder="Completion" value={completion} onChange={(e) => setCompletion(e.target.value)}
            size='lg'/>
              <MDBTextArea
            label="Details"
            name="detail"
            type="text"
            placeholder="Details" value={detail} onChange={(e) => setDetail(e.target.value)}
            size='lg'/>  
             <MDBBtn size='lg'  color="grey" className="grey accent-4" onClick={handlePostJob}>Post</MDBBtn>
                </MDBCardBody>

               
            </MDBCol>
            
          </MDBRow>
        </MDBContainer>
    )
}

export default PostJob;

/*
  
 
*/