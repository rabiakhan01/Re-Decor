
import { TextField } from "@mui/material";

const MuiTextField = ({ name, placeholder, type, value, onChange, error, helperText }) => {

    return (
        <div className="h-14">
            <TextField
                FormHelperTextProps={{ style: { marginTop: '0px', } }}
                autoComplete="off"
                helperText={helperText}
                value={value}
                error={error}
                fullWidth
                id="outlined-basic"
                name={name}
                type={type}
                label={placeholder}
                variant="outlined"
                onChange={onChange}
                size="small"
            />
        </div>
    )
}

export default MuiTextField;