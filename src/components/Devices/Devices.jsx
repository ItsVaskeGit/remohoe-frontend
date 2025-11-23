const Devices = ({img, active}) => {
    return (
       <div>
      <div>
        <h3>Device name</h3>
      </div>

      <div>
        <div><img src={img}/></div>
      </div>

      <div>
        <p>Status: {active ? "Active" : "Inactive"}</p>
        <button>Edit</button>
      </div>
    </div>

    );

};
export default Devices