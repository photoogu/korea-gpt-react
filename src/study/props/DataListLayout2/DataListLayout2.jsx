function DataListLayout2({ dataList }) {

    return <ul>
        {
            dataList.map((num, index) =>
                <li key={index}>{num}</li>
            )
        }
    </ul>
}

export default DataListLayout2;