import { Switch as Btn, Group as wrapper } from "@mantine/core";
import React from "react";

function Switcher() {
  return (
    <Group justify="center">
      <Switch size="lg" onLabel="ON" offLabel="OFF" />
    </Group>
  );
}

export default Switcher;
