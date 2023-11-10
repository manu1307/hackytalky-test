import { Banner, BannerVariant, Icon, IconSize, Text, Typography } from "@channel.io/bezier-react";
import { ChannelBtnSmileFilledIcon, InfoIcon } from "@channel.io/bezier-icons";
import * as Styled from "@/App.styled";

function App() {
  return (
    <Styled.Container>
      <Styled.Content>
        <Icon
          source={ChannelBtnSmileFilledIcon}
          size={IconSize.XL}
          color="bgtxt-blue-normal"
        />
        <Text typo={Typography.Size24} bold>
          Bezier Design System + Vite
        </Text>
     <Text>
      Hello world
     </Text>

        <Banner  variant={BannerVariant.Cobalt} content="전화번호 설정하는 게 좋아요" hasLink linkText="설정하기" icon={InfoIcon} />
        <Text typo={Typography.Size16}>
          Sees
          <a
            href="https://main--62bead1508281287d3c94d25.chromatic.com/?path=/story/intro--page"
            target="_blank"
            rel="noopener"
          >
            Storybook
          </a>
          For more information.
        </Text>
      </Styled.Content>
    </Styled.Container>
  );
}

export default App;
