import data from './octoberReport.json';

type TargetIntent = string;

function getDataByIntent(targetIntent: TargetIntent) {
  const filteredData = data.map((entry) => {
    const date = entry.Date;
    const report = entry.Report;

    const matchingPairs = report
      .filter((item) => item.Intent === targetIntent)
      .reduce((result, item) => {
        if (item.Value !== 'NA') {
          (result as any)[item.Description] = item.Value;
        }
        return result;
      }, {});

    if (Object.keys(matchingPairs).length > 0) {
      return { Date: date, ...matchingPairs };
    }
    return null; // Skip this entry if there are no matching pairs without 'NA'
  });

  return filteredData.filter((entry) => entry !== null);
}

function getKeysByIntent(targetIntent: TargetIntent) {
  const uniqueKeys = new Set();

  data.forEach((entry) => {
    const report = entry.Report;

    report
      .filter(
        (item) => item.Intent === targetIntent && item.Description !== 'Date'
      )
      .forEach((item) => {
        if (item.Value !== 'NA') {
          uniqueKeys.add(item.Description);
        }
      });
  });

  return [...uniqueKeys];
}

export { getDataByIntent, getKeysByIntent };
