'use client'

import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Workouts from './Workouts';

export default function Navigation() {
  return (
    <div className="Navigation">
      <Tabs>
        <TabList>
          <Tab>Workouts</Tab>
          <Tab>Exercises</Tab>
          <Tab>My Plan</Tab>
        </TabList>

        <TabPanel>
          <Tabs>
              <Workouts />
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs>
            <p>Content 2 </p>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs>
            <p>Content 3 </p>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
}
