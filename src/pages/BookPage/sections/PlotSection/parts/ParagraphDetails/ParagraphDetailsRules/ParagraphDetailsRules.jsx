import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { SectionContainer } from "../../../../parts/SectionContainer/SectionContainer";
import RandomRules from "./RandomRules/RandomRules";
import ChoiceRules from "./ChoiceRules/ChoiceRules";
import styles from "./ParagraphDetailsRules.module.scss";

const ParagraphDetailsRules = () => {
  return (
    <Tabs className={styles.tabs} defaultFocus={true}>
      <TabList>
        <SectionContainer className={styles.tabsList}>
          <Tab
            className={styles.tabsLink}
            selectedClassName={styles.tabsLinkActive}
          >
            Выбор
          </Tab>
          <Tab
            className={styles.tabsLink}
            selectedClassName={styles.tabsLinkActive}
          >
            Случайное событие
          </Tab>
        </SectionContainer>
      </TabList>
      <TabPanel className={styles.tabsPanel}>
        <ChoiceRules />
      </TabPanel>
      <TabPanel className={styles.tabsPanel}>
        <RandomRules />
      </TabPanel>
    </Tabs>
  );
};

export default ParagraphDetailsRules;
