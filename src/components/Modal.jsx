import React, { useState } from "react";
import Button from "./Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useAtom } from "jotai";
import { modalAtom } from "../jotai-provider";
const Modal = ({ openModal, setOpenModal = () => {} }) => {
  const [formDetails, setFormDetails] = useState({ email: "", password: "" });
  const [_, setIsOpen] = useAtom(modalAtom);

  const loginHandler = async () => {
    try {
      const loginResponse = await axios.post(
        `${process.env.REACT_APP_API_URI}/users/login`,
        formDetails
      );
      if (loginResponse?.data?.status) {
        setIsOpen(false);
        localStorage.setItem("token", loginResponse.data.token);
        toast.success("Logged in successfully");
      } else {
        toast.error(loginResponse?.data?.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const onChangeHandler = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  return (
    openModal &&
    !localStorage.token && (
      <div className="fixed inset-0 z-50 overflow-hidden flex justify-center items-center bg-black bg-opacity-50">
        <div className="relative bg-white w-full max-w-[540px] rounded-lg">
          <div class="relative bg-white rounded-lg">
            <div class="flex items-center justify-between p-4 md:p-5 rounded-top">
              <h3 class="text-xl font-semibold text-gray-900">
                Sign in to our platform
              </h3>
              <button
                type="button"
                class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                onClick={() => setOpenModal(false)}
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <div class="p-4 md:p-5">
              <div class="space-y-4" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                    onChange={onChangeHandler}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    onChange={onChangeHandler}
                  />
                </div>
                <div class="flex justify-between">
                  <div class="flex items-start"></div>
                  <a
                    href="#"
                    class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <div className="flex justify-center">
                  <Button size={"w-full"} onClick={loginHandler}>
                    Login to your account
                  </Button>
                </div>
                <div class="text-sm font-medium text-gray-500">
                  Not registered?{" "}
                  <a
                    href="#"
                    class="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default Modal;
