"use client";
import styled from "styled-components";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledUpperFooter>
        <StyledFooterTextContainer>
          <StyledFooterTitle>Контакт - центр</StyledFooterTitle>
          <StyledFooterText>098 900 09 09</StyledFooterText>
          <StyledFooterText>Пн - Пт 09:00 - 21:00</StyledFooterText>
          <StyledFooterText>Пн - Пт 09:00 - 21:00</StyledFooterText>
        </StyledFooterTextContainer>
        <StyledFooterTextContainer>
          <StyledFooterTitle>Покупцям</StyledFooterTitle>
          <StyledFooterText>Оплата і доставка</StyledFooterText>
          <StyledFooterText>Повернення</StyledFooterText>
          <StyledFooterText>Питання та відповіді</StyledFooterText>
        </StyledFooterTextContainer>
        <StyledFooterTextContainer>
          <StyledFooterTitle>Особистий кабінет</StyledFooterTitle>
          <StyledFooterText>Мої дані</StyledFooterText>
          <StyledFooterText>Історія замовлень</StyledFooterText>
          <StyledFooterText>Улюблені</StyledFooterText>
          <StyledFooterText>Розсилки</StyledFooterText>
        </StyledFooterTextContainer>
        <StyledFooterTextContainer>
          <StyledFooterTitle>Про компанію</StyledFooterTitle>
          <StyledFooterText>Про нас</StyledFooterText>
          <StyledFooterText>Новини</StyledFooterText>
          <StyledFooterText>Стати партнером</StyledFooterText>
          <StyledFooterText>Угода користувача</StyledFooterText>
        </StyledFooterTextContainer>
      </StyledUpperFooter>
      <StyledLowerFooter>
        <StyledInfoBlock>
          <div>НОВИНКИ</div>
          <div>ЧОЛОВІКИ</div>
          <div>ЖІНКИ</div>
          <div>АКСЕСУАРИ</div>
          <div>АКЦІЇ</div>
        </StyledInfoBlock>
        <div>© 2022 — 2023 IGNAT. Усі права захищені</div>
      </StyledLowerFooter>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  font-family:
    Ysabeau SC,
    serif;

  height: 336px;
`;

const StyledLowerFooter = styled.div`
  background-color: #343434;

  height: 93px;

  color: #ffffff;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;

  display: flex;
  justify-content: space-between;

  align-items: center;

  padding-right: 97px;
  padding-left: 97px;
`;

const StyledInfoBlock = styled.div`
  display: flex;

  width: 416px;
  height: 11px;

  gap: 30px;
`;

const StyledUpperFooter = styled.div`
  display: grid;

  grid-template-columns: 35% repeat(3, 21%);

  padding-left: 97px;

  height: 243px;

  align-items: center;

  border-top: 1px solid #cccccc;
`;

const StyledFooterTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledFooterTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;

  color: #343434;

  margin-bottom: 20px;
`;

const StyledFooterText = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  color: #626262;
`;
