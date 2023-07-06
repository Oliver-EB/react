

const EverydayTypes = () => {
    let username: string = 'Oliver';
    const age: number = 30;
    const average: number = 9;
    const myarr: string[] = [];
    let big1 = BigInt(9007199254099);

    myarr.push(username);
    myarr.push(age.toString());
    myarr.push(average.toString());
    myarr.push(big1.toString())


    return (
        <div className="container">
            <h2 className="text-center">Everyday Types</h2>
            <hr />
            <div className="d-flex justify-content-center">
                <div className="card" style={{ width: "50%" }}>
                    <div className="card-body ">
                        <table className="table table-striped table-dark mt-3">
                            <thead>
                                <tr>
                                    <th>Valor</th>
                                    <th>Tipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myarr.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value}</td>
                                        <td>{typeof value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EverydayTypes