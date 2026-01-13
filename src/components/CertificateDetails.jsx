import React from "react";
import { CloseRounded } from "@mui/icons-material";
import { Modal } from "@mui/material";

const CertificateDetails = ({ openModal, setOpenModal }) => {
    const certificate = openModal?.project;

    return (
        <Modal
            open={true}
            onClose={() => setOpenModal({ state: false, project: null })}
        >
            {/* Container */}
            <div className="w-full h-full absolute top-0 left-0 bg-[#000000a7] flex items-top justify-center overflow-y-scroll transition-all duration-500 ease-in-out">
                {/* wrapper */}
                <div className="max-w-[800px] w-full rounded-2xl my-[50px] mx-[12px] h-fit bg-darkTheme-card text-lightTheme-text_primary p-5 flex flex-col relative">
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                            color: "white",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <img
                        src={certificate?.img}
                        alt={certificate?.degree}
                        className="w-full object-contain max-h-[500px] rounded-[12px] mt-[30px] bg-white"
                    />
                    <h1 className="text-[24px] font-semibold text-darkTheme-text_primary my-[6px] mb-0 md:text-[28px] md:my-[7px]">
                        {certificate?.degree}
                    </h1>
                    <div className="md:text-[16px] my-[2px] mx-[6px] font-normal text-darkTheme-text_secondary text-[12px]">
                        {certificate?.school}
                    </div>
                    <div className="md:text-[14px] my-[2px] mx-[6px] font-normal text-darkTheme-text_secondary text-[10px]">
                        {certificate?.date}
                    </div>
                    <div className="flex flex-wrap my-1 md:my-2">
                        <div className="text-[12px] font-normal text-darkTheme-text_primary m-1 py-1 px-2 rounded-lg bg-zinc-800 md:text-[14px]">
                            {certificate?.grade}
                        </div>
                    </div>
                    <p className="text-[14px] font-normal text-darkTheme-text_primary my-[6px] mx-[6px] md:text-[16px] md:m-[6px]">
                        {certificate?.desc}
                    </p>
                </div>
            </div>
        </Modal>
    );
};

export default CertificateDetails;
