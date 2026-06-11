import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  IconButton,
  Button
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import {
  getAllWinners,
  deleteWinner
} from "../services/winnerService";

function WinnerList() {

  const [winners, setWinners] = useState([]);

  useEffect(() => {

    loadWinners();

  }, []);

  const loadWinners = async () => {

    try {

      const response = await getAllWinners();

      setWinners(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  const handleDelete = async (id) => {

    try {

      await deleteWinner(id);

      alert("Winner Deleted Successfully");

      loadWinners();

    } catch (error) {

      console.error(error);

      alert("Delete Failed");

    }

  };

  return (
    <>
      <Navbar />

      <Box sx={{ display: "flex" }}>

        <Sidebar />

        <Box sx={{ flexGrow: 1, p: 3 }}>

          <Typography
            variant="h4"
            gutterBottom
          >
            Winner List
          </Typography>

          <Link
            to="/winners/create"
            style={{ textDecoration: "none" }}
          >

            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{ mb: 3 }}
            >
              Create Winner
            </Button>

          </Link>

          <TableContainer component={Paper}>

            <Table>

              <TableHead>

                <TableRow>

                  <TableCell>ID</TableCell>

                  <TableCell>
                    Campaign ID
                  </TableCell>

                  <TableCell>
                    User ID
                  </TableCell>

                  <TableCell>
                    Winner Date
                  </TableCell>

                  <TableCell>
                    Actions
                  </TableCell>

                </TableRow>

              </TableHead>

              <TableBody>

                {winners.map((winner) => (

                  <TableRow key={winner.id}>

                    <TableCell>
                      {winner.id}
                    </TableCell>

                    <TableCell>
                      {winner.campaignId}
                    </TableCell>

                    <TableCell>
                      {winner.userId}
                    </TableCell>

                    <TableCell>
                      {winner.winnerDate}
                    </TableCell>

                    <TableCell>

                      <Link
                        to={`/winners/edit/${winner.id}`}
                      >

                        <IconButton color="primary">

                          <EditIcon />

                        </IconButton>

                      </Link>

                      <IconButton
                        color="error"
                        onClick={() =>
                          handleDelete(winner.id)
                        }
                      >

                        <DeleteIcon />

                      </IconButton>

                    </TableCell>

                  </TableRow>

                ))}

              </TableBody>

            </Table>

          </TableContainer>

        </Box>

      </Box>

    </>
  );
}

export default WinnerList;