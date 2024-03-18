import "@/common/reset.css";
import { Header } from "@/components/header/Header";

import StyledComponentsRegistry from "../../lib/registry";
import styled from "styled-components";
import { ProductContainer } from "@/components/pagePadding/ContentPadding";
import { Footer } from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Header />
          <ProductContainer>{children}</ProductContainer>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
