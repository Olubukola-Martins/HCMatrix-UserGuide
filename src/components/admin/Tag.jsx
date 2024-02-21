import { close } from "../../assets/admin/icons/settings"


const Tag = ({tagName}) => {
  return (
    <div className="bg-customGray-tag px-2 py-1  rounded-md w-full h-fit flex gap-x-2 ">
        <p>{tagName}</p>
        <img src={close} alt="close tag" width={20} height={20} className=" text-customGray ml-auto" />
    </div>
  )
}

export default Tag