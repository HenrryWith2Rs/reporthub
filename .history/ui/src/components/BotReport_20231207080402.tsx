// BotReport.tsx
type BotReportProps = {
  html: string;
};

const BotReport: React.FC<BotReportProps> = ({ html }) => {
  return (
    <iframe
      title="Bot Report"
      width="100%"
      height="100%"
      srcDoc={html}
      style={{ backgroundColor: 'white', border: 'none' }}
    />
  );
};

export default BotReport;
