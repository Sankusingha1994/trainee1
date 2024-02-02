import { createTheme,ThemeProvider } from '@mui/material/styles';
import{ AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query";

const theme = createTheme({
    palette:{
        primary:{
            main:"#ABACB2"
        }
        
    }
})
const queryClient = new QueryClient();
export default function App({Component,pageProps}:AppProps){
    return(
        <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
        <Component{...pageProps}/>
        </QueryClientProvider>
        </ThemeProvider>
    )
    
}