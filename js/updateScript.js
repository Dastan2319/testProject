class App extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            usersInfo:{},
            id:'',
            name:'',
            username:'',
            email:'',
            phone:'',
            website:''
        }
        this.update=this.update.bind(this);
        this.handleOnChange=this.handleOnChange.bind(this);
        this.handleOnChangeID=this.handleOnChangeID.bind(this);
        this.delete=this.delete.bind(this);
    }

    handleOnChange(name)
    {
        this.setState({[name.target.id]:name.target.value})
    }

    handleOnChangeID(name)
    {
        if(name.target.value<=10 && name.target.value>0)
        {
        this.setState({id:name.target.value})
        fetch('https://jsonplaceholder.typicode.com/users/'+name.target.value)
        .then(response => response.json())
        .then(result => this.setState({name:result.name,email:result.email,phone:result.phone,username:result.username,website:result.website}));
        }
       
        
    }
    update()
    {
        event.preventDefault();
        if(this.state.id<=10 && this.state.id>0)
        {
        fetch('https://jsonplaceholder.typicode.com/users/'+this.state.id, {
        method: 'PUT',
        body: JSON.stringify({
            id:this.state.id,
            name: this.state.name,
            username:  this.state.username,
            email:  this.state.email,
            phone:  this.state.phone,
            website:  this.state.website,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        }).then(response => response.json())
        .then(json => alert("Изменено "+this.state.name))
    }
        
        
    }

    delete()
    {
        if(this.state.id<=10 && this.state.id>0)
        {
        fetch('https://jsonplaceholder.typicode.com/users/'+this.state.id, {
        method: 'DELETE'
        });
        alert(this.state.name +" Удален");
        this.setState({id:'',name:'',email:'',phone:'',username:'',website:''});
    }
    }

    renderUpdate()
    {
        return(
            <div>
                 <form id="createElem" onSubmit={this.update}>
                 <div className="oneLine">
                <p>ID:</p>
                <input type="text" id="id" value={this.state.id} onChange={this.handleOnChangeID}/>
                </div>
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
            
            <div className="oneLine">
            <input type="submit" value="Отправить" />
            <button onClick={this.delete} >Удалить</button>
            </div>
            </form>
            </div>
        )
    }

    render()
    {
        return(
            <div className="createMenu">
                {this.renderUpdate()}
            </div>
        )
    }

}

ReactDOM.render(<App />,document.getElementById("App"))