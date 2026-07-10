import React from "react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const OrderActions = ({ toggleEdit, toggleDetails }: any) => {
  return (
    <>
      <button
        onClick={toggleDetails}
        className="hover:bg-gray-2 rounded-sm p-2"
      >
        <VisibilityOutlinedIcon sx={{ color: '#495270', fontSize: 20 }} />
      </button>
      <button onClick={toggleEdit} className="hover:bg-gray-2 rounded-sm p-2">
        <EditOutlinedIcon sx={{ color: '#495270', fontSize: 20 }} />
      </button>
    </>
  );
};

export default OrderActions;
