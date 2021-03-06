import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import TinyColor from 'tinycolor2';

import Utilities from '../containers/Utilities';

import Header from './Header';
import IconButton from './IconButton';
import InnerContent from './InnerContent';
import ListView from './ListView';
import ListViewSection from './ListViewSection';
import SwitchListViewItem from './SwitchListViewItem';
import ListViewItem from './ListViewItem';

import * as constants from '../constants';

const SettingsStyle = Styled.section`
  overflow: hidden;
  user-select: none;
  width: 100%;
  height: 100%;
  background-color: ${(props) => {
    return props.theme === 'day' ? constants.LIGHT_GREY : constants.DARK_MODE_BACKGROUND;
  }};
  position: relative;
`;

const AppVersionStyle = Styled.section`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 40px;
  color: ${(props) => {
    return props.theme === 'day' ? constants.BORDER_GREY : constants.GREY;
  }};
  font-size: ${constants.SMALL_FONT_SIZE}px;
  text-align: center;
  line-height: 40px;
`;

const Settings = (props, context) => {
  const {
    app,
    theme,
    launchOnStartUp,
    profileLinkColor,
    onToggleLaunchOnStartUp,
    onToggleTheme,
    shouldLogout,
    renderProcess,
    shell,
    localeManager,
  } = props;

  const onHandleColor = profileLinkColor;
  const onColor = TinyColor(onHandleColor).lighten(25).toString();

  return (
    <SettingsStyle
      theme={theme}
    >
      <Header
        theme={theme}
        title={localeManager.settings.title}
        leftView={
          <IconButton
            theme={theme}
            icon="back"
            color={profileLinkColor}
            onClick={() => {
              context.router.history.replace('/composer');
            }}
          />
        }
      />
      <InnerContent
        theme={theme}
        style={{
          position: 'relative',
          top: '51px',
          left: '0px',
          height: 'calc(100% - 81px)',
        }}
      >
        <ListView
          theme={theme}
          color={profileLinkColor}
        >
          <ListViewSection
            theme={theme}
          >
            <SwitchListViewItem
              theme={theme}
              onColor={onColor}
              onHandleColor={onHandleColor}
              title={localeManager.settings.night_mode_action}
              action={() => {
                onToggleTheme(theme === 'day' ? 'night' : 'day');
              }}
              state={theme !== 'day'}
              type="switch"
            />
            <SwitchListViewItem
              theme={theme}
              onColor={onColor}
              onHandleColor={onHandleColor}
              title={localeManager.settings.launch_start_up_action}
              action={(checked) => {
                if (checked) {
                  renderProcess.send('enableAtStartUp');
                } else {
                  renderProcess.send('disableAtStartUp');
                }
                onToggleLaunchOnStartUp(checked);
              }}
              state={launchOnStartUp}
              type="switch"
              isLast
            />
          </ListViewSection>
          <ListViewSection
            theme={theme}
          >
            <ListViewItem
              theme={theme}
              title={localeManager.settings.read_faq_action}
              action={(e) => {
                e.stopPropagation();
                shell.openExternal('https://github.com/jonathontoon/tweet-tray/blob/master/README.md');
              }}
            />
            <ListViewItem
              theme={theme}
              title={localeManager.settings.report_issue_action}
              action={(e) => {
                e.stopPropagation();
                shell.openExternal('https://github.com/jonathontoon/tweet-tray/issues');
              }}
              isLast
            />
          </ListViewSection>
          <ListViewSection
            theme={theme}
          >
            <ListViewItem
              theme={theme}
              title={localeManager.settings.quit_action}
              action={(e) => {
                e.stopPropagation();
                renderProcess.send('quitApplication');
              }}
            />
            <ListViewItem
              theme={theme}
              title={localeManager.settings.log_out_action}
              action={(e) => {
                e.stopPropagation();
                shouldLogout();
                renderProcess.send('restartApplication');
              }}
              type="warning"
              isLast
            />
          </ListViewSection>
        </ListView>
        <AppVersionStyle>
          Version {app.getVersion()}
        </AppVersionStyle>
      </InnerContent>
    </SettingsStyle>
  );
};

Settings.propTypes = {
  theme: PropTypes.string,
  launchOnStartUp: PropTypes.bool.isRequired,
  profileLinkColor: PropTypes.string,
  onToggleLaunchOnStartUp: PropTypes.func.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
  shouldLogout: PropTypes.func.isRequired,
  app: PropTypes.object.isRequired,
  renderProcess: PropTypes.object.isRequired,
  shell: PropTypes.object.isRequired,
  localeManager: PropTypes.object.isRequired,
};

Settings.defaultProps = {
  theme: 'day',
  profileLinkColor: constants.BLUE,
};

Settings.contextTypes = {
  router: PropTypes.object,
};

export default Utilities(Settings);
