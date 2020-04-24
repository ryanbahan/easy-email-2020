export const head = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;">
<meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE" />

    <title>Page title</title>

    <style>
       @import url(http://fonts.googleapis.com/css?family=Roboto:300); /*Calling our web font*/

      /* Some resets and issue fixes */
      #outlook a { padding:0; }
      body{ width:100% !important; -webkit-text; size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0; }
      .ReadMsgBody { width: 100%; }
      .ExternalClass {width:100%;}
      .backgroundTable {margin:0 auto; padding:0; width:100%;!important;}
      table td {border-collapse: collapse;}
      .ExternalClass * {line-height: 115%;}
      /* End reset */


      /* These are our tablet/medium screen media queries */
      @media screen and (max-width: 630px){


          /* Display block allows us to stack elements */
          *[class="mobile-column"] {display: block;}

          /* Some more stacking elements */
          *[class="mob-column"] {float: none !important;width: 100% !important;}

          /* Hide stuff */
          *[class="hide"] {display:none !important;}

          /* This sets elements to 100% width and fixes the height issues too, a god send */
          *[class="100p"] {width:100% !important; height:auto !important;}

          /* For the 2x2 stack */
          *[class="condensed"] {padding-bottom:40px !important; display: block;}

          /* Centers content on mobile */
          *[class="center"] {text-align:center !important; width:100% !important; height:auto !important;}

          /* 100percent width section with 20px padding */
          *[class="100pad"] {width:100% !important; padding:20px;}

          /* 100percent width section with 20px padding left & right */
          *[class="100padleftright"] {width:100% !important; padding:0 20px 0 20px;}

          /* 100percent width section with 20px padding top & bottom */
          *[class="100padtopbottom"] {width:100% !important; padding:20px 0px 20px 0px;}


      }
        </style>


</head>`;

export const bodyTop = `<body style="padding:0; margin:0"><table border="0" cellpadding="0" cellspacing="0" style="margin: 0; padding: 0" width="100%">
    <tr>
        <td align="center" valign="top">`;

export const bottom = `</td>
    </tr>
</table></body>
</html>`;
