import { useNavigate } from "react-router-dom";
import { FloatingInput } from "../../../components/admin";
import { useState } from "react";
import { FormBtn } from "../../../components/common";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../../../pages/auth/Auth";
import { Select } from "antd";
import { FormContainer } from "../../../components/admin";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const loginNavigate = () => {
    navigate("/auth/login");
  };

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your details");
      return;
    }
  };

  return (
    <Auth>
      <div className="relative w-[40%]">
        <div className="text-center text-[#3A3A3AB2] mb-10">
          <h3 className=" font-semibold text-xl mb-2">
            Enter Email to reset password
          </h3>
        </div>
        <form className="  relative w-full" onSubmit={onSubmitHandler}>
          <div className="flex flex-col gap-10">
            <FloatingInput
              placeHolder="Your email"
              value={email}
              type="email"
              onChange={onChangeHandler}
              name="email"
            />

            <FormContainer label="Select category">
              <Select
                allowClear
                placeholder="Select Category"
                className="md:flex hidden w-[full]"
                onChange={(value) => console.log("Selected value:", value)}
                options={[
                  {
                    value: 1,
                    label: `Category one`,
                  },
                  {
                    value: 2,
                    label: `Category two`,
                  },
                  {
                    value: 3,
                    label: `Category three`,
                  },
                  {
                    value: 4,
                    label: `Category four`,
                  },
                  {
                    value: 5,
                    label: `Category five`,
                  },
                  {
                    value: 6,
                    label: `Category six`,
                  },
                ]}
              />

              {/* <select
              className="w-full py-3 px-4 rounded-lg border outline-none text-sm"
              value={category}
              onChange={changeCategory}
            >
              <option disabled>Select Category</option>
              {mainCategories?.map((category, index) => {
                return (
                  <option className="" key={category.id} id={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select> */}
            </FormContainer>

            <FormBtn custom="rounded-full" loading={false} />
          </div>
        </form>

        <div className="mt-3 text-center">
          <p className="text-[#7C7C7C] text-[13px] mx-auto ">
            This was a mistake ?{" "}
            <span
              className="text-[#F77366] cursor-pointer"
              onClick={loginNavigate}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </Auth>
  );
};

export default ForgotPassword;
