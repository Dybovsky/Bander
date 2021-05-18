import { useState } from "react";

const BasicSearch = () => {
        const [genre, setGenre] = useState("");
        const [type, setType] = useState("");
        const [array, setArray] = useState([]);

        const handleOnSubmit = async (genre, type) => {
            const data = { genre, type };
            try{
                const response = await getBasicSearchArray(data);
                setArray(response.newArray);
            } catch (err) {
                alert(err);
            }
          };
    
    return (
        <>
        <div className="card h-75 shadow rounded w-75 align-self-center" style={{marginTop:"100px"}}>
          <div className="d-flex justify-content-around">
          <h2 className="align-self-center"><u>Search by animal type</u></h2>
          <Link className="btn btn-primary m-1" to="/search/advanced">Advanced Search</Link>
          </div>
          <form className= "align-self-center justify-self-center"  onSubmit={handleSubmit(handleOnSubmit)}>
            <div className="form-row align-self-center " >
                <div className="col-auto my-1">
                <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Animal Type</label>
                    <select {...register("type")} defaultValue='' className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option>Choose...</option>
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    </select>
                </div>
                <div className="col-auto my-1">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
        {!pets && <h3 className="text-center">choose Type to search</h3>}
        </div>
        <div>
          {pets && <CardsList petsArray={pets}/>}
        </div>
        </>
    );
}
export default BasicSearch;