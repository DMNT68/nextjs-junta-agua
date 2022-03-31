import { Fade, FormControl, FormControlLabel, FormLabel, Pagination, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { projects } from '../../data/projects';
import styles from '../../styles/featuredWork.module.css';

export const FeaturedWork = () => {
  const [bgState, setBgState] = useState('');
  const [value, setValue] = React.useState(0);
  const [fadeState, setFadeState] = useState(true);

  useEffect(() => {
    setBgState(projects[0].url);
  }, []);

  const bgStyle = {
    backgroundImage: `url(${bgState})`,
  };

  const handleChange = (event) => {
    // console.log(event.target.value);
    setValue(event.target.value);
    setBgState(projects[event.target.value].url);

    setFadeState(false);
    setTimeout(() => {
      setFadeState(true);
    }, 25);
  };

  const handleChangePag = (event, value) => {
    // console.log(value, projects[value - 1]);
    setValue(value - 1);
    setBgState(projects[value - 1].url);
  };

  return (
    <Fade in={fadeState}>
      <div className={styles.container} style={bgStyle}>
        <div className={styles.mainBox}>
          <Typography variant="h6" color="initial">
            Proyectos
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="controlled-radio-buttons-group" value={value} onChange={handleChange}>
              {projects.map((item, idx) => (
                <FormControlLabel key={item.name} value={idx} control={<Radio />} label={item.name} />
              ))}
              {/* <FormControlLabel value="male" control={<Radio />} label="Male" /> */}
            </RadioGroup>
          </FormControl>
        </div>
        <div className={styles.paginator}>
          <Pagination count={projects.length} shape="rounded" size="small" onChange={handleChangePag} />
        </div>
      </div>
    </Fade>
  );
};
