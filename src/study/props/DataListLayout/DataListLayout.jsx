function DataListLayout({ children }) {
    
    console.log(children);

    const liList = [
        <li>5번리스트</li>,
        <li>6번리스트</li>,
        <li>7번리스트</li>,
        <li>8번리스트</li>,
    ];
    console.log(liList);

    return <ul>
        {children}
        {liList}
        {
            children.map((li, index) =>
                <li key={index}>{"1" + li.props.children}</li>
            )
        }
        {
            liList.map((li, index) =>
                <li key={index}>{"2" + li.props.children}</li>
            )
        }
    </ul>
}

export default DataListLayout;