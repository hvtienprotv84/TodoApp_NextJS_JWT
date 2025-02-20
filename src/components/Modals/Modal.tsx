"use client";

import { toggleModal } from "@/actions/appActions";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import "@/styles/Modals.css";

const Modal: React.FC<{ content: React.ReactNode }> = ({ content }) => {
  const dispatch = useDispatch<AppDispatch>();
  const modal = useSelector((state: RootState) => state.app.modal);

  return (
    <div className="fixed left-0 top-0 z-[100] flex h-screen w-full items-center justify-center">
      <div
        className="modal-overlay absolute left-0 top-0 h-screen w-full bg-[#00000073]"
        onClick={() => {
          dispatch(toggleModal(!modal));
        }}
      ></div>
      <div className="modal-content relative z-[100] mx-[1rem] my-0 w-full max-w-[630px] rounded-[15px] bg-[#212121] p-[2rem] max-[450px]:text-[90%]">
        {content}
      </div>
    </div>
  );
};

export default Modal;
