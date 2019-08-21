
class App extends React.Component
{
    constructor(props){
        super(props)
        this.state={
            usersInfo: [],
            oneUser:{}
        }
    this.clickCard = this.clickCard.bind(this);
    this.UserInfo = this.UserInfo.bind(this);
    this.closeModel=this.closeModel.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => this.setState({usersInfo:result}))
    }

    closeModel()
    {
        var user=this.state.oneUser;
        user={}
        this.setState({oneUser:user})
        ReactDOM.render(<div />,document.getElementById("modal"))
    }

    clickCard(props)
    {
        ReactDOM.render(
            <div className="darkBack">
            <div className="moreInfo">
                <button className="closeBtn" onClick={this.closeModel}>X</button>
                <p>Логин:{props.info.username}</p>
                <p>Имя:{props.info.name}</p>
                <p>Телефон:{props.info.phone}</p>
                <p>Сайт:{props.info.website}</p>
                <p>Email:{props.info.email}</p>
                <p>Адресс:{props.info.address.city},{props.info.address.street} {props.info.address.suite}</p>
                <p>Компания:{props.info.company.name}</p>
             </div></div>,document.getElementById("modal"))
        
    }
    UserInfo(item)
    {
        return(
        <div className="card" onClick={ ()=>this.clickCard(item)  } >
           
            <p>Логин:{item.info.username}</p>
            <p>Имя:{item.info.name}</p>
            <p>Телефон:{item.info.phone}</p>
            <p>Сайт:{item.info.website}</p>
            <p>Email:{item.info.email}</p>
            
        </div>
        );
      
    }


    renderUser()
    {
        return (
            
            this.state.usersInfo.map(item=>
                <this.UserInfo key={item.id} info={item}/>
                )
        )
    } 
    
    render()
    {
      
        return  (
            <div className="list">
                {this.renderUser()}
            </div>
        )
    }
}


ReactDOM.render(<App />,document.getElementById("app"))
