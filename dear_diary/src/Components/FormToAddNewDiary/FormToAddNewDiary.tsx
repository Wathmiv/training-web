import { TextField,Button,CardHeader} from "@mui/material";
import { toast } from 'react-toastify';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { addEntry,updateCurrentEntry,clearCurrentEntry } from "../../redux/slices/diaryReducer";
import { RootState } from "../../redux/store";
import { useEffect} from "react";
import TimeAgo from "../TimeAgo/TimeAgo";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

interface FormToAddNewDiaryProps {
    onCloseOverlay: () => void;
  }

function FormToAddNewDiary({ onCloseOverlay}: FormToAddNewDiaryProps){

    const dispatch = useDispatch();
    const currentEntry= useSelector((state:RootState)=> state.diary.currentEntry);
    const name= useSelector((state:RootState)=> state.user.nickname);
  
    useEffect(() => {
        const key = "user";
        dispatch(updateCurrentEntry({[key]:name}));
    },[name] );
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(updateCurrentEntry({[name]:value}));
    };
      
        const handleSubmit = () => {
            if (!currentEntry.title.trim() || !currentEntry.description.trim()){
                toast.error("Title and Description are required",{autoClose: 2000});
            }
            else{
               
                dispatch(addEntry(currentEntry));
                toast(
                    <div style={{ 
                        display: "flex",
                        flexDirection: "row",
                        height: "24px",
                        gap: "8px",
                        justifyContent: "space-between",
                                                
                        }}>
                            
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        }}>
                        <CheckIcon
                        style={{
                            width: "24px",
                            height: "24px",
                            color : "#28C76F",
                        }}  
                        />
                        </div>

                        <span
                        style={{
                            width:"274px",
                            color: "var(--light-typography-color-heading-text, #4B465C)",
                            fontFamily: "Public Sans, sans-serif",
                            fontSize: "15px",
                            fontWeight: 600,
                            fontStyle: "normal",
                            lineHeight: "22px",
                            fontFeatureSettings: "'clig' off, 'liga' off",
                        }}
                        >
                       Record saved successfully
                      </span>
                      
                    <div
                     style={{
                        color: "var(--Light-Typography-Color-Muted-Text, #4B465C)",
                        fontFamily: "Public Sans, sans-serif",
                        fontSize: "13px",
                        fontWeight: 400,
                        fontStyle: "normal",
                        lineHeight: "20px",
                        fontFeatureSettings: "'clig' off, 'liga' off",
                        textAlign: "right",
                     }}
                    >
                      <TimeAgo date={new Date()} />
                    </div>
                    <CloseIcon
                    style={{
                        width: "16px",
                        height: "16px",
                        color: "var(--Light-Typography-Color-Muted-Text, #4B465C)",
                    }}
                    />
                    </div>
                    
                  );
                dispatch(clearCurrentEntry());
                onCloseOverlay();
            }
        };

        const handleCancel = () => {
            dispatch(clearCurrentEntry());
            onCloseOverlay();
        };
      
    
    return (
        
        <div className="form-div"
        style={{
            maxWidth: "500px",
            height: "100%",
            position: "relative",
            right: "0px",
            background: "#FFFFFF"

        }}
        >
            <div 
            className="card"
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "26px",
                padding: "24px",
                alignItems: "center",
            }}
            >
            
            <CardHeader
                title={
                    <div
                    style={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"space-between",
                        maxWidth:"352px",
                        alignItems: "center"
                    }}
                    >
                    <div 
                        className="heading-div"
                        style={{
                            fontFamily: "public sans, sans-serif",
                            fontSize: "18px",
                            fontWeight: 500,
                            fontStyle: "normal",
                            lineHeight: "24px",
                        }}  
                        >

                        Submit New
                    </div>
                    <div>
                    <IconButton aria-label="close"
                    onClick={handleCancel}
                    sx={{
                        '&:hover': {
                          backgroundColor: 'transparent', 
                        },
                      }}
                    >
                        <div
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "10px",
                            borderRadius: "6px",
                            background: "var(--light-opacity-color-gray-gray-16, rgba(75, 70, 92, 0.16))",
                        }}  
                        >
                            <Avatar 
                                src="/Icons.png"
                                alt="icon" 
                                style={{
                                    width: "24px",
                                    height: "24px",
                                    padding: "7px",
                                }}
                                />
                        </div>
                    
                    </IconButton>
                    </div>
                </div>
                }
                 
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                style={{
                    padding: "0px",
                    gap: "6px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent:"space-between"
                }}
            />

            <form
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                width: "100%",
            
            }}>

                <div
                style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "4px",
                    flexDirection: "column",
                }}
                >
                    <div
                    style={{
                        alignSelf:"stretch",
                        color: "var(--light-typography-color-heading-text, #4B465C)",
                        fontFamily: "Public Sans, sans-serif",
                        fontSize: "13px",
                        fontWeight: 400,
                        fontStyle: "normal",
                        lineHeight: "normal",
                        fontFeatureSettings: "'clig' off, 'liga' off",
                    }}
                    >
                    Title
                    </div>
                    <TextField 
                    placeholder="Title"
                    style={{
                        width: "100%",
                    }}
                    inputProps={{
                        style: {
                          height: "24px",
                          padding: "7px 14px", 
                        },
                      }}
                    name="title"
                    value={currentEntry.title}
                    onChange={handleChange}
                    />
                </div>
            <div
            style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "4px",
                flexDirection: "column",
            }}
            >
                <div
                style={{
                    alignSelf:"stretch",
                    color: "var(--light-typography-color-heading-text, #4B465C)",
                    fontFamily: "Public Sans, sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    fontStyle: "normal",
                    lineHeight: "normal",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                }}
                >
                    Description
                </div>
            <TextField
                placeholder="Description"
                style={{
                    width: "100%",
                }}
                inputProps={{
                    style: {
                        maxWidth: "100%",
                    },
                  }}
                multiline
                rows={8} 
                variant="outlined"
                name="description"
                value={currentEntry.description}
                onChange={handleChange}
                />
            </div>
        </form>
        <div className="buttons"
        style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "16px",
            alignSelf: "stretch",
        }}
        >
                <Button
                    type="submit"
                    variant="contained"
                    onClick={handleSubmit}
                    style={{
                        textTransform: "none",
                        borderRadius: "6px",
                        background: "#0092DD",
                        padding: "10px 20px",

                    }}
                >
                    <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        justifyContent: "center",
                        fontFeatureSettings: "'clig' off, 'liga' off",
                        fontFamily: "Public Sans, sans-serif",
                        fontSize: "15px",
                        fontWeight: 500,
                        fontStyle: "normal",
                        lineHeight: "18px",
                        letterSpacing: "0.43px",
                        
                    }}
                    >
                    Submit
                    </div>
                    
                </Button>
                <Button
                    type="button"
                    variant="contained"
                    className="cancelButton"
                    onClick={handleCancel}
                    style={{
                        textTransform: "none",
                        borderRadius: "6px",
                        padding: "10px 20px",
                        opacity: 0.65,
                        background: "var(--light-opacity-color-secondary-secondary-16, rgba(168, 170, 174, 0.16))",

                    }}
                ><div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    justifyContent: "center",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    fontFamily: "Public Sans, sans-serif",
                    fontSize: "15px",
                    fontWeight: 500,
                    fontStyle: "normal",
                    lineHeight: "18px",
                    letterSpacing: "0.43px",
                    color: "var(--light-solid-color-secondary-secondary-500-base, #A8AAAE)",
                    
                }}
                >
                Cancel
                </div>
                </Button>                              
             </div>
         </div>
        </div>

        
    );
}

export default FormToAddNewDiary;