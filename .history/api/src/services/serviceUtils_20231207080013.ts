export function generateApptDetailedHtml() {
  const styledPage = `
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
  
  <html>
  <head>
      
      <meta http-equiv="content-type" content="text/html; charset=windows-1252"/>
      <title></title>
      <meta name="generator" content="LibreOffice 7.2.6.2 (Windows)"/>
      <meta name="author" content="Gouda Sagar"/>
      <meta name="created" content="2015-06-05T18:17:20"/>
      <meta name="changedby" content="Unknown"/>
      <meta name="changed" content="2023-11-21T15:58:48"/>
      <meta name="AppVersion" content="16.0300"/>
      
      <style type="text/css">
          body,div,table,thead,tbody,tfoot,tr,th,td,p { font-family:"Calibri"; font-size:x-small }
          a.comment-indicator:hover + comment { background:#ffd; position:absolute; display:block; border:1px solid black; padding:0.5em;  } 
          a.comment-indicator { background:red; display:inline-block; border:1px solid black; width:0.5em; height:0.5em;  } 
          comment { display:none;  } 
      </style>
      
  </head>
  
  <body>
  <table cellspacing="0" border="0">
      <colgroup width="431"></colgroup>
      <colgroup span="2" width="86"></colgroup>
      <tr>
          <td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom bgcolor="#92D050"><b><font face="Times New Roman" size=3 color="#000000">Appointment Calls - Summary</font></b></td>
          <td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom bgcolor="#92D050"><b><font face="Times New Roman" size=3 color="#000000">Count</font></b></td>
          <td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom bgcolor="#92D050" sdnum="1033;0;0.00"><b><font face="Times New Roman" size=3 color="#000000">%</font></b></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Total Appointment Calls to MOD</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="4827" sdnum="1033;"><font face="Times New Roman" size=3>8251</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="100" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">100</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Calls remained with in MOD IVR (Not transferred to BOT)</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="1579" sdnum="1033;"><font face="Times New Roman" size=3>3587</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="32.71" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">43.47</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Missing Records in BOT (Platform Bug)</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="0" sdnum="1033;"><font face="Times New Roman" size=3>7</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="0" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">0.08</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Total Appointment Calls from MOD to Bot</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="3248" sdnum="1033;"><font face="Times New Roman" size=3>4656</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="67.29" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">56.43</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Transfers to BOT after Intercept</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="3127" sdnum="1033;"><font face="Times New Roman" size=3>4436</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="96.27" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">95.27</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Transfers to BOT after MOD NLU</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="121" sdnum="1033;"><font face="Times New Roman" size=3>213</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="3.73" sdnum="1033;0;0.00"><font face="Times New Roman" size=3>4.57</font></td>
      </tr>
      <tr>
          <td height="20" align="left" valign=bottom><font face="Times New Roman" size=3><br></font></td>
          <td align="center" valign=bottom><font face="Times New Roman" size=3><br></font></td>
          <td align="left" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3><br></font></td>
      </tr>
      <tr>
          <td height="20" align="left" valign=bottom><font face="Times New Roman" size=3><br></font></td>
          <td align="center" valign=bottom><font face="Times New Roman" size=3><br></font></td>
          <td align="left" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3><br></font></td>
      </tr>
      <tr>
          <td style="border-top: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom bgcolor="#92D050"><b><font face="Times New Roman" size=3 color="#000000">Appointment Confirmation</font></b></td>
          <td style="border-top: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom bgcolor="#92D050"><b><font face="Times New Roman" size=3 color="#000000">Count</font></b></td>
          <td style="border-top: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom bgcolor="#92D050" sdnum="1033;0;0.00"><b><font face="Times New Roman" size=3 color="#000000">%</font></b></td>
      </tr>
      <tr>
          <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Total Confirm Intent</font></td>
          <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="3250" sdnum="1033;"><font face="Times New Roman" size=3>4666</font></td>
          <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3><br></font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Confirm Calls MOD Intercept (Proactive and Explicit)</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom bgcolor="#FFFFFF"><font face="Times New Roman" size=3 color="#000000">NA</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">NA</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Confirm Calls MOD NLU (Proactive and Explicit)</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom bgcolor="#FFFFFF" sdval="46" sdnum="1033;"><font face="Times New Roman" size=3 color="#000000">119</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000"><br></font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Confirm Success (Proactive and Explicit)</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom bgcolor="#FFFFFF" sdval="3171" sdnum="1033;"><font face="Times New Roman" size=3 color="#000000">4501</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000"><br></font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Proactive Confirm Readout - Attempted</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="3248" sdnum="1033;"><font face="Times New Roman" size=3>4657</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000"><br></font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Proactive Confirm Readout - Success</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom bgcolor="#C5E0B4" sdval="3171" sdnum="1033;"><font face="Times New Roman" size=3>4501</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="97.63" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">96.65</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Proactive Confirm Readout - Failure</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="77" sdnum="1033;"><font face="Times New Roman" size=3>156</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="2.37" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">3.35</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Proactive Confirm Readout - Transfer</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="0" sdnum="1033;"><font face="Times New Roman" size=3>0</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="0" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">0</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Explicit Confirm Readout - Attempted</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="2" sdnum="1033;"><font face="Times New Roman" size=3>9</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000"><br></font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Explicit Confirm Readout - Success</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom bgcolor="#C5E0B4" sdval="0" sdnum="1033;"><font face="Times New Roman" size=3>0</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="0" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">0</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Explicit Confirm Readout - Failure</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="0" sdnum="1033;"><font face="Times New Roman" size=3>0</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="0" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">0</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Explicit Confirm Readout - Transfer</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="2" sdnum="1033;"><font face="Times New Roman" size=3>9</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="100" sdnum="1033;0;0.00"><font face="Times New Roman" size=3>100</font></td>
      </tr>
      <tr>
          <td height="20" align="left" valign=bottom><font face="Times New Roman" size=3><br></font></td>
          <td align="center" valign=bottom><font face="Times New Roman" size=3><br></font></td>
          <td align="left" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3><br></font></td>
      </tr>
      <tr>
          <td height="20" align="left" valign=bottom><font face="Times New Roman" size=3><br></font></td>
          <td align="center" valign=bottom><font face="Times New Roman" size=3><br></font></td>
          <td align="left" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3><br></font></td>
      </tr>
      <tr>
          <td style="border-top: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom bgcolor="#92D050"><b><font face="Times New Roman" size=3 color="#000000">Appointment Cancel</font></b></td>
          <td style="border-top: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom bgcolor="#92D050"><b><font face="Times New Roman" size=3 color="#000000">Count</font></b></td>
          <td style="border-top: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom bgcolor="#92D050" sdnum="1033;0;0.00"><b><font face="Times New Roman" size=3 color="#000000">%</font></b></td>
      </tr>
      <tr>
          <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Cancel Calls MOD Intercept</font></td>
          <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom><font face="Times New Roman" size=3>NA</font></td>
          <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3>NA</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Cancel Calls MOD NLU</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="172" sdnum="1033;"><font face="Times New Roman" size=3>271</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000"><br></font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Cancel - Attempted</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="1058" sdnum="1033;"><font face="Times New Roman" size=3>1349</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000"><br></font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Cancel - Success</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom bgcolor="#C5E0B4" sdval="929" sdnum="1033;"><font face="Times New Roman" size=3>1118</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="87.81" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">82.88</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Cancel - Failure</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="1" sdnum="1033;"><font face="Times New Roman" size=3>30</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="0.09" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">2.22</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Cancel - Transfer (Including Ineligible)</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="125" sdnum="1033;"><font face="Times New Roman" size=3>194</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="11.81" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">14.38</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Cancel - Ineligible</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="84" sdnum="1033;"><font face="Times New Roman" size=3>144</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="7.94" sdnum="1033;0;0.00"><font face="Times New Roman" size=3>10.67</font></td>
      </tr>
      <tr>
          <td height="20" align="left" valign=bottom><font face="Times New Roman" size=3><br></font></td>
          <td align="center" valign=bottom><font face="Times New Roman" size=3><br></font></td>
          <td align="left" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3><br></font></td>
      </tr>
      <tr>
          <td style="border-top: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom bgcolor="#92D050"><b><font face="Times New Roman" size=3 color="#000000">Appointment Reschedule</font></b></td>
          <td style="border-top: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom bgcolor="#92D050"><b><font face="Times New Roman" size=3 color="#000000">Count</font></b></td>
          <td style="border-top: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom bgcolor="#92D050" sdnum="1033;0;0.00"><b><font face="Times New Roman" size=3 color="#000000">%</font></b></td>
      </tr>
      <tr>
          <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Reschedule Calls MOD Intercept</font></td>
          <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom><font face="Times New Roman" size=3>NA</font></td>
          <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3>NA</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Reschedule Calls MOD NLU</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="37" sdnum="1033;"><font face="Times New Roman" size=3>60</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000"><br></font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Reschedule &ndash; Attempted</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="400" sdnum="1033;"><font face="Times New Roman" size=3>575</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000"><br></font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Reschedule - Success</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom bgcolor="#C5E0B4" sdval="350" sdnum="1033;"><font face="Times New Roman" size=3>464</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="87.5" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">80.7</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Reschedule - Failure</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="0" sdnum="1033;"><font face="Times New Roman" size=3>0</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="0" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">0</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Reschedule - Transfer (Including Ineligible)</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="50" sdnum="1033;"><font face="Times New Roman" size=3>111</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="12.5" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">19.3</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Reschedule - Ineligible</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="42" sdnum="1033;"><font face="Times New Roman" size=3>102</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="10.5" sdnum="1033;0;0.00"><font face="Times New Roman" size=3>17.74</font></td>
      </tr>
      <tr>
          <td height="20" align="left" valign=bottom><font face="Times New Roman" size=3><br></font></td>
          <td align="center" valign=bottom><font face="Times New Roman" size=3><br></font></td>
          <td align="left" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3><br></font></td>
      </tr>
      <tr>
          <td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom bgcolor="#92D050"><b><font face="Times New Roman" size=3 color="#000000">Appointment Glympse Offer</font></b></td>
          <td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom bgcolor="#92D050"><b><font face="Times New Roman" size=3 color="#000000">Count</font></b></td>
          <td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom bgcolor="#92D050"><b><font face="Times New Roman" size=3 color="#000000">%</font></b></td>
      </tr>
      <tr>
          <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Glympse Offer - Attempted</font></td>
          <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="0" sdnum="1033;"><font face="Times New Roman" size=3>0</font></td>
          <td style="border-top: 2px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3><br></font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Glympse Offer - Accepted</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom><font face="Times New Roman" size=3>NA</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">NA</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Glympse Offer - Failure</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom><font face="Times New Roman" size=3>NA</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">NA</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Glympse Offer - Not Accepted</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom><font face="Times New Roman" size=3>NA</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 2px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3>NA</font></td>
      </tr>
      <tr>
          <td height="20" align="left" valign=bottom><font face="Times New Roman" size=3><br></font></td>
          <td align="center" valign=bottom><font face="Times New Roman" size=3><br></font></td>
          <td align="left" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3><br></font></td>
      </tr>
      <tr>
          <td height="20" align="left" valign=bottom><font face="Times New Roman" size=3><br></font></td>
          <td align="center" valign=bottom><font face="Times New Roman" size=3><br></font></td>
          <td align="left" valign=bottom sdnum="1033;0;0.00"><font face="Times New Roman" size=3><br></font></td>
      </tr>
      <tr>
          <td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" height="20" align="center" valign=bottom bgcolor="#92D050"><b><font face="Times New Roman" size=3 color="#000000">Appointment FAQ</font></b></td>
          <td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom bgcolor="#92D050"><b><font face="Times New Roman" size=3 color="#000000">Count</font></b></td>
          <td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom bgcolor="#92D050"><b><font face="Times New Roman" size=3 color="#000000">%</font></b></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Do I need to be at home ?</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="1" sdnum="1033;"><font face="Times New Roman" size=3>1</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="1.41" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">1.37</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Is there any fee for the appointment?</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="2" sdnum="1033;"><font face="Times New Roman" size=3>0</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="2.82" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">0</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">I have a missed call from Spectrum ?</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="60" sdnum="1033;"><font face="Times New Roman" size=3>64</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="84.51" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">87.67</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">FAQ how long does it take to complete the work?</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="3" sdnum="1033;"><font face="Times New Roman" size=3>5</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="4.23" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">6.85</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">How old does the person need to be to meet with the technician?</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="1" sdnum="1033;"><font face="Times New Roman" size=3>1</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="1.41" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">1.37</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Do you call me before you start?</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="4" sdnum="1033;"><font face="Times New Roman" size=3>2</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="5.63" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">2.74</font></td>
      </tr>
      <tr>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="left" valign=bottom><font face="Times New Roman" size=3 color="#000000">Can I manage my appointments online?</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=bottom sdval="0" sdnum="1033;"><font face="Times New Roman" size=3>0</font></td>
          <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 2px solid #000000" align="center" valign=bottom sdval="0" sdnum="1033;0;0.00"><font face="Times New Roman" size=3 color="#000000">0.00</font></td>
      </tr>
      <tr>
          <td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-left: 2px solid #000000; border-right: 1px solid #000000" height="20" align="center" valign=bottom bgcolor="#D9D9D9"><b><font face="Times New Roman" size=3 color="#000000">Total</font></b></td>
          <td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000" align="center" valign=bottom bgcolor="#D9D9D9" sdval="71" sdnum="1033;"><b><font face="Times New Roman" size=3 color="#000000">73</font></b></td>
          <td style="border-top: 2px solid #000000; border-bottom: 2px solid #000000; border-right: 2px solid #000000" align="right" valign=bottom bgcolor="#D9D9D9" sdval="100" sdnum="1033;0;0.00"><b><font face="Times New Roman" size=3 color="#000000">100.00</font></b></td>
      </tr>
  </table>
  <!-- ************************************************************************** -->
  </body>
  
  </html>
  `;
  return styledPage;
}
