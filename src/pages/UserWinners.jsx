import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

import { getAllWinners } from "../services/winnerService";

function UserWinners() {

  const [winners, setWinners] = useState([]);

  useEffect(() => {

    loadWinners();

  }, []);

  const loadWinners = async () => {

    try {

      const response = await getAllWinners();

      setWinners(response.data);

    }
    catch (error) {

      console.error(error);

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
            Winners
          </Typography>

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

export default UserWinners;