class App extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            name:'',
            username:'',
            email:'',
            phone:'',
            website:'',
            formSend:false
        }
        this.send=this.send.bind(this);
        this.handleOnChange=this.handleOnChange.bind(this);
    }

    send()
    {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
              name: this.state.name,
              username:  this.state.username,
              email:  this.state.email,
              phone:  this.state.phone,
              website:  this.state.website,
        }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(json => this.setState({formSend:true}))
          event.preventDefault();
          
          alert("Создан новый пользователь "+this.state.name);
          
    }

    handleOnChange(name)
    {
        this.setState({[name.target.id]:name.target.value})
    }

    renderCreateUser()
    {
        return(
            
            <form id="createElem" onSubmit={this.send}>
            <div className="oneLine">
                <p>Имя:</p>
                <input type="text" id="name" value={this.state.name} onChange={this.handleOnChange}/>
            </div>
            <div className="oneLine">
                <p>Логин:</p>
                <input type="text" id="username" value={this.state.username} onChange={this.handleOnChange}/>
            </div>
            <div className="oneLine">
                <p>Email:</p>
                <input type="text" id="email" value={this.state.email} onChange={this.handleOnChange}/>
            </div>
            <div className="oneLine">
                <p>Телефон</p>
                <input type="text" id="phone" value={this.state.phone} onChange={this.handleOnChange}/>
            </div>
            <div className="oneLine">
                <p>Сайт:</p>
                <input type="text" id="website" value={this.state.website} onChange={this.handleOnChange}/>
            </div>
            <input type="submit" value="Отправить" />
            </form>
        )
    }

    render()
    {
        return( 
            <div className="createMenu">               
                {this.renderCreateUser()}
            </div> 
        )   

    }
}
ReactDOM.render(<App />,document.getElementById("App"))