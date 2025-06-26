

const Footer = () => {
  return (
    <div>

      <footer className=" footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p> © {new Date().getFullYear()} - Green University IEEE Student Branch. All rights reserved.</p>
    <p>  Built with ❤️ by the following IEEE Members</p>


    <div className="avatar-group -space-x-2">
  <div className="avatar">
    <div className="w-12">
      <img src="/src/Images/Atikur_Rahman.jpg" />
    
    </div>
  
</div>
 <div className="avatar">
    <div className="w-12">
      <img src="/src/Images/ATIKHASAN.png" />
    
    </div>
    
  
</div>
 <div className="avatar">
    <div className="w-12">
      <img src="/src/Images/Ashraful.png" />
    
    </div>
  
</div>
 <div className="avatar">
    <div className="w-12">
      <img src="/src/Images/Promod Chandra Das .jpg" />
    
    </div>
  
</div>
</div>



  </aside>
</footer>
      
    </div>
  );
};

export default Footer;