import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useEffect } from "react";
import { API } from "../global";
import "./StudentTable.css";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const checkAuth = (res) => {
  if (res.status === 401) {
    throw Error("unauthorized");
  } else {
    return res.json();
  }
};

const logout = () => {
  sessionStorage.clear();
  window.location.href="/users/login";
};

const StudentTable = () => {
  let [studentDatas, setStudentDatas] = useState(null);
  const getStudentDatas = () => {
    fetch(`${API}/studentDatas`, {
      headers: {
        "x-auth-token": sessionStorage.getItem("token"),
      },
    })
      .then((res) => checkAuth(res))
      .then((result) => setStudentDatas(result))
      .catch((err) => logout());
  };
  useEffect(() => getStudentDatas(), []);
  console.log(studentDatas);
  return studentDatas ? (
    <StudentCard
      studentDatas={studentDatas}
      setStudentDatas={setStudentDatas}
    />
  ) : (
    <h2 className="table">Loading Table...</h2>
  );
};

const StudentCard = ({ studentDatas, getStudentDatas }) => {
  const navigate = useNavigate();
  const deleteStudent = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student"
    );
    if (confirmDelete === true) {
      await fetch(`${API}/studentData/${id}`, {
        method: "DELETE",
      });
      getStudentDatas();
    }
  };
  return (
    // <div className="component">
    //   <div className="card">
    //     {studentDatas.map((data, index) => (
    //       <div className="card-two" key={index}>
    //         <div className="student-details">
    //           <p className="name">
    //             <strong>Student Name : </strong>
    //             {data.studentName}
    //           </p>
    //           <p className="batch">
    //             <strong>Batch : </strong>
    //             {data.batch}
    //           </p>
    //         </div>
    //         <div className="action">
    //           <IconButton
    //             color="primary"
    //             onClick={() => navigate(`/studentDatas/${data._id}`)}
    //           >
    //             <InfoIcon />
    //           </IconButton>
    //           <IconButton color="success">
    //             <EditIcon />
    //           </IconButton>
    //           <IconButton color="error">
    //             <DeleteIcon />
    //           </IconButton>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    // ---------------------------------------------------------------------------------------------------
    <div className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="center">Student Name</StyledTableCell>
              <StyledTableCell align="center">Batch</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentDatas.map((data, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {data._id}
                </StyledTableCell>
                <StyledTableCell align="center">{data.name}</StyledTableCell>
                <StyledTableCell align="center">{data.batch}</StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() => navigate(`/studentDatas/${data._id}`)}
                  >
                    <InfoIcon />
                  </IconButton>
                  <IconButton color="success">
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => deleteStudent(data._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StudentTable;
