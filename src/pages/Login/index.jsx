import React, { useState } from "react";
import {
  Grid,
  FormControl,
  Input,
  FormHelperText,
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const Login = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMenuOpen(open);
  };

  const menuList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Menu Drawer */}
      <Button onClick={toggleDrawer(true)} variant="contained" sx={{ mb: 2 }}>
        Abrir Menu
      </Button>
      <Drawer anchor="left" open={menuOpen} onClose={toggleDrawer(false)}>
        {menuList}
      </Drawer>

      {/* Tela de Login */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          background: "linear-gradient(45deg, #ff6f61, #ffcc5c)",
          padding: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            padding: 4,
            backgroundColor: "white",
            borderRadius: 4,
            boxShadow: 10,
            textAlign: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Input
                  id="login_nome"
                  aria-describedby="login_nome_helper_text"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  placeholder="Digite seu login"
                  sx={{
                    borderRadius: 2,
                    border: "1px solid #ccc",
                    padding: "12px 14px",
                    "&:focus": {
                      borderColor: "#ff6f61",
                    },
                  }}
                />
                <FormHelperText
                  id="login_nome_helper_text"
                  sx={{ color: "#777" }}
                >
                  Login
                </FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <Input
                  id="login_senha"
                  type="password"
                  aria-describedby="login_senha_helper_text"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Digite sua senha"
                  sx={{
                    borderRadius: 2,
                    border: "1px solid #ccc",
                    padding: "12px 14px",
                    "&:focus": {
                      borderColor: "#ff6f61",
                    },
                  }}
                />
                <FormHelperText
                  id="login_senha_helper_text"
                  sx={{ color: "#777" }}
                >
                  Senha
                </FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  backgroundColor: "#ff6f61",
                  "&:hover": {
                    backgroundColor: "#ff3b30",
                  },
                }}
              >
                Entrar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Login;
