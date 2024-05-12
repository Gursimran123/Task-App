import {useState} from 'react';
import {useNavigate,Link} from 'react-router-dom';

const Signup = () => {
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:''
    });

    const navigate = useNavigate()

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/api/register`,{
                method:'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
            });
            if(response){
                navigate('/login')
            } else{
                throw new Error('Failed to Register!')
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
  return (
     <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-96 mt-12">
        <h2 className="text-2xl mb-4">Signup</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-between mb-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Signup
          </button>
        </div>
        <span className='text-md font-normal '>Already registered? Please
        <Link to='/login' className='hover:underline'> Login</Link></span>
      </form>
    </div>
  )
}

export default Signup
