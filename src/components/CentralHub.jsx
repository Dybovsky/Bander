import { useAuth } from "../context/auth";

const CentralHub = () => {
  const {user} = useAuth()

  return (
    <>
      <div className="fs-2 text-start m-5" style={{ color: "lightsteelblue" }}>
        Welcome {user ? `Back ${user.fName}!` : "To Bander!"}
      </div>
    </>
  );
};

export default CentralHub;
