import axios from 'axios'
import React,  {Component } from 'react'
import {Link} from 'react-router-dom'

class SampleList extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: []
        }
        this.handleDelete=this.handleDelete.bind(this);
    }

    componentDidMount(){
        this.getData();
    }
    getData(){
        axios.get('http://localhost:8000/api/get-sample').then(response => {this.setState({
            items:response.data
        })
    })
    }
    handleDelete(e) {
        e.preventDefault();

        const id =e.target.id.value;

        console.log(id);
        axios.delete('http://localhost:8000/api/delete-sample/'+id);

        this.getData();
    }
    render(){
        //const { items } =this.state

        return (
            <div className='container py-5 mt-5 text-center'>
            <div className='row justify-content-center'>
            <div className='col-md-12'>All Items</div>
              <div className='col-md-12'>
                    <Link classNam='btn btn-primary btn-sm mb-3 mt-5' to='/create'>
                      Create new
                    </Link>
{this.state.items.length!==0 ?
<table className="table table-hovered table-bordered">

    <thead>
        <td>S/No.</td>
        <td>Title</td>
        <td>Body</td>
        <td>Edit</td>
        <td>Delete</td>
    </thead>

{this.state.items.map((item,i)=>(
    <tr>
        <td>{i+1}</td>
        <td> {item.title}</td>
        <td> {item.body}</td>
        <td> <Link   className='btn btn-info'  to={`editSample/${item.id}/edit`} key={item.id}  > Edit </Link></td>
        <td><form onSubmit={this.handleDelete} >
        <input type="hidden" name="id" value={item.id}  />
           <button type="submit"  className="btn btn-danger">Delete</button>
         </form>
         </td>
    </tr>
  ))}

</table>


: <div> No item added yet!</div> }
                 </div>
            </div>
          </div>
        )
    }
}

export default SampleList