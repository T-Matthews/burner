


let Zipcode = () => {
 
    const [zip,setZip] = useState("")
    const changeZip = () => {
       
    let newZip = data.get('zipCode')
    console.log(newZip)
    setZip(newZip)


    
    return (
        <div className="ZipCode">
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Retrieve Fuel Prices:</label>
                    <input type="text" className="form-control" id="zipCode" name="zipCode" aria-describedby="zipCode" placeholder="Enter 5 Digit Zip Code"/>
                    <small id="emailHelp" className="form-text text-muted">Only used to determine local rates for gas and electricity</small>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}}

export default Zipcode