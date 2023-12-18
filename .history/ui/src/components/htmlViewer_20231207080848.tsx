// BotReport.tsx
type BotReportProps = {
  html: string;
};

const BotReport: React.FC<BotReportProps> = ({ html }) => {
  console.log(html);
  return (
    <iframe
      title="Bot Report"
      width="50%"
      height="100%"
      srcDoc={html}
      style={{ backgroundColor: 'white', border: 'none' }}
    />
  );
};

export default BotReport;
