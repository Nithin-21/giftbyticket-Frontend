import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
  TextField,
  TablePagination
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

import {
  getAllCampaigns,
  deleteCampaign
} from "../services/campaignService";

function CampaignList() {

  const [campaigns, setCampaigns] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    loadCampaigns();
  }, []);

  const loadCampaigns = async () => {

    try {

      const response = await getAllCampaigns();

      setCampaigns(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  const handleDelete = async (id) => {

    try {

      await deleteCampaign(id);

      alert("Campaign Deleted Successfully");

      loadCampaigns();

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
            Campaign List
          </Typography><Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 3
            }}
          >
          
            <TextField
              label="Search Campaign"
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ width: "300px" }}
            />
          
            <Link
              to="/campaigns/create"
              style={{ textDecoration: "none" }}
            >
          
              <Button
                variant="contained"
                startIcon={<AddIcon />}
              >
                Create Campaign
              </Button>
          
            </Link>
          
          </Box>

          <TableContainer component={Paper}>

            <Table>

              <TableHead>

                <TableRow>

                  <TableCell>ID</TableCell>

                  <TableCell>
                    Campaign Name
                  </TableCell>

                  <TableCell>
                    Description
                  </TableCell>

                  <TableCell>
                    Entry Fee
                  </TableCell>

                  <TableCell>
                    Status
                  </TableCell>

                  <TableCell>
                    Actions
                  </TableCell>

                </TableRow>

              </TableHead>

              <TableBody>

                {campaigns
                .filter((campaign) =>
                campaign.campaignName.toLowerCase()
                .includes(search.toLowerCase())).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage).map((campaign) => (

                  <TableRow key={campaign.id}>

                    <TableCell>
                      {campaign.id}
                    </TableCell>

                    <TableCell>
                      {campaign.campaignName}
                    </TableCell>

                    <TableCell>
                      {campaign.description}
                    </TableCell>

                    <TableCell>
                      ₹ {campaign.entryFee}
                    </TableCell>

                    <TableCell>

                      <Chip
                        label={campaign.status}
                        color={
                          campaign.status === "ACTIVE"
                            ? "success"
                            : "error"
                        }
                      />

                    </TableCell>

                    <TableCell>

                      <Link
                        to={`/campaigns/edit/${campaign.id}`}
                      >

                        <IconButton color="primary">

                          <EditIcon />

                        </IconButton>

                      </Link>

                      <IconButton
                        color="error"
                        onClick={() =>
                          handleDelete(campaign.id)
                        }
                      >

                        <DeleteIcon />

                      </IconButton>

                    </TableCell>

                  </TableRow>

                ))}

              </TableBody>

            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={
                campaigns.filter((campaign) =>
                  campaign.campaignName
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ).length
              }
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(event, newPage) =>
                setPage(newPage)
              }
              onRowsPerPageChange={(event) => {
                setRowsPerPage(
                  parseInt(event.target.value, 10)
                );
                setPage(0);
              }}
            />

          </TableContainer>

        </Box>

      </Box>
    </>
  );
}

export default CampaignList;