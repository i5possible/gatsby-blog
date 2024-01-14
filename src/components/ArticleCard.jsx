import React from 'react';
import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

const ArticleCard = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug

  // const slug = post.fields.slug;
  const date = post.frontmatter.date;
  const html = post.frontmatter.description || post.excerpt;

  return (
    <Card w={["100%", "960px"]}>
      <CardBody>
        <CardHeader>
          <Heading as={'h3'}>{title}</Heading>
          <Text as={'body1'}>{date}</Text>
        </CardHeader>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: html
            }}
            itemProp="description"
          />
        </section>
      </CardBody>
    </Card>
  )
}

export default ArticleCard;
