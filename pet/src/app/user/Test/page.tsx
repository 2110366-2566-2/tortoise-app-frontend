'use client';
import { Tabs, Tab, TextField, Typography, Box } from '@mui/material';
import DogPic from '../../../../public/image/mockdog1.jpg';
import { Image } from '@mui/icons-material';
import TopBar from '../../../../components/TopBar';
import ProfileCard from '../../../../components/ProfileCard.tsx';
import SettingsCard from '../../../../components/SettingsCard';
import PetCard from '../../../../components/PetCard';
import PetCatalog from '../../../../components/PetCatalogue';
import SearchField from '../../../../components/SearchField';
import PetCatalogue from '../../../../components/PetCatalogue';
export default function Test() {
    return <div><TopBar/>
    <div><ProfileCard/>
    <div><SettingsCard/></div>
    </div>
    </div>

}
