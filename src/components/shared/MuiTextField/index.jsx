
import { TextField } from "@mui/material";

const MuiTextField = ({ name, placeholder, type, value, onChange }) => {

    return (
        <TextField
            id="outlined-basic"
            name={name}
            type={type}
            label={placeholder}
            variant="outlined"
            onChange={onChange}
            size="small"

        />
    )
}

export default MuiTextField;