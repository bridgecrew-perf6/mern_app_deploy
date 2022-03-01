import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import './home.css';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { useState, useEffect, useMemo } from 'react';
import { axiosInstance } from '../../config';

const Home = () => {
  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axiosInstance.get('/users/stats', {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTA5MDNiOWFlZDY2NTY3Y2QwMWVhMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTMyNTI5MywiZXhwIjoxNjQ1NzU3MjkzfQ.tHwexW6OeYIjn-liQMYGR0nsMxh67bkoe4GKaxHz1Qg',
          },
        });

        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });

        //setUserStats(res.data);
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], 'New User': item.total },
          ])
        );
        console.log(`response data is ${JSON.stringify(res.data)}`);
      } catch (err) {
        console.log(err);
      }
    };

    getStats();
  }, [MONTHS]);

  console.log(`this is ${JSON.stringify(userStats)}`);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
