import { Link } from "react-router-dom"
import { FaPhone, FaMap, } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";


const Header = () => {
  return (
 <>
 {/* Header */}
 <header className="py-18 lg:pt-8 lg:pb-14 bg-pink-200">
    {/* Container */}
<div className="container mx-auto">

<div className="flex justify-center lg:justify-normal lg:mx-auto">
    <img src="/img/header/logo.svg" alt="" />
</div>

</div>

 </header>
 </>
  )
}

export default Header
