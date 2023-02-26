import {
  AreaChart,
  Area,
  Tooltip,
} from "recharts";

const Chart1 = () => {
  const data = [ 
    { name: " A",uv: 50},
    { name: " B",uv: 200},
    { name: " C",uv: 1000},
    { name: " D",uv: 700},
    { name: " E",uv: 1500},
    { name: " F",uv: 1000},
    { name: " G",uv: 1900},
    { name: " I",uv: 1000},
    { name: " K",uv: 1400},
    { name: " L",uv: 100},
    { name: " M",uv: 50}
  ];
  return (
        <AreaChart width={300} height={155} >
          <Tooltip />
          <Area type="monotone" data={data} dataKey="uv" stroke="green" fill="#66FF66" />
        </AreaChart>
  );
};

export default Chart1;
