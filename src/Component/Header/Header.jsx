import profile from'../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center'>
            <h3 className='text-4xl font-bold'>Knowledge Cafe</h3>
            <img src={profile} alt="pro" />
            
        </div>
    );
};

export default Header;