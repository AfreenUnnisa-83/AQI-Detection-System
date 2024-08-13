import React from 'react';

const AirQualityLevelsTable = () => {
  const levels = [
    { range: '0 - 50', level: 'Good',health:'Air quality is considered satisfactory, and air pollution poses little or no risk',stmt:'None'},
    { range: '51 - 100', level: 'Moderate',health:'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.',stmt:'Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.'},
    { range: '101 - 150', level: 'Unhealthy for Sensitive Groups',health:'Members of sensitive groups may experience health effects. The general public is not likely to be affected.',stmt:'Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.'},
    { range: '151 - 200', level: 'Unhealthy',health:'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects',stmt:'Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion'},
    { range: '201 - 300', level: 'Very Unhealthy',health:'Health warnings of emergency conditions. The entire population is more likely to be affected',stmt:'Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.'},
    { range: '301 and higher', level: 'Hazardous',health:'Health alert: everyone may experience more serious health effects',stmt:'Everyone should avoid all outdoor exertion'},
  ];

  const rowColors = ['bg-success', 'bg-warning','bg-orange', 'bg-danger', 'bg-very-unhealthy ', 'bg-hazardous'];
  const shouldTextBeWhite = (bgClass) => {
    return bgClass === 'bg-very-unhealthy' || bgClass === 'bg-hazardous';
  };

  return (
    
    <div className="card mb-4">
      <div className="card-body">
        <h3 className="card-title" style={{color:'white'}}>Air Quality Levels</h3>
        <table className='table'>
        <table className="table table-bordered">
          <thead>
            <tr >
              <th scope="col">AQI Range</th>
              <th scope="col">Level of Health Concern</th>
              <th scope='col'>Health Implications</th>
              <th scope='col'>Cautionary Statement (for PM2.5)</th>
            </tr>
          </thead>
          
          <tbody>
          {levels.map(({ range, level, health, stmt }, index) => {
              const bgColorClass = rowColors[index % rowColors.length];
              const textClass = shouldTextBeWhite(bgColorClass) ? 'text-white' : '';
              return (
                <tr key={index} className={`${bgColorClass} ${textClass}`}>
                  <td>{range}</td>
                  <td>{level}</td>
                  <td>{health}</td>
                  <td>{stmt}</td>
                </tr>
              );
            })}
              
          </tbody>
        </table>
        </table>
      </div>
    </div>
  );
};

export default AirQualityLevelsTable;