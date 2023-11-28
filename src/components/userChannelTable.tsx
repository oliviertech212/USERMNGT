

 const Table = ({Source,Users,Revenue,Sales,channelData}:any) => {

    return (
      <table className='w-[98%] m-auto'>
        <thead className='bg-light-bg-second h-11'>
          <tr className='w-[100%] py-3'>
            <td>{Source}</td>
            <td>{Users}</td>
            <td>{Revenue}</td>
            <td>{Sales}</td>
          </tr>
        </thead>
        <tbody>
          {channelData.map((data:any, index:any) => (
            <tr key={index} className=' h-11 border-b-2 mt-2'>
              <td className='flex pt-3 items-center  ' > <img src={`${data.logo}`} className='h-6 w-6 mr-2 rounded-full '  alt="" /> {data.channel}</td>
              <td>{data.count}</td>
              <td className=' text-emerald-600 ' >${data.revenue.toFixed(2)}</td>
              <td>{data.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };


  export default Table