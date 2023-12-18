// BotReport.tsx
type HtmlViewerProps = {
  html: string;
};

const HtmlViewer: React.FC<HtmlViewerProps> = ({ html }) => {
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

export default HtmlViewer;
