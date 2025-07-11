import React from 'react';

import {
  TextSkeleton,
  AvatarSkeleton,
  BreadcrumbsSkeleton,
  ButtonSkeleton,
  CardSkeleton,
  ChartSkeleton,
  CompositeSkeleton,
  DialogSkeleton,
  FormSkeleton,
  GridSkeleton,
  ImageSkeleton,
  KanbanColumnSkeleton,
  ListSkeleton,
  NavbarSkeleton,
  NotificationSkeleton,
  SidebarSkeleton,
  TableSkeleton,
  TabsSkeleton,
  TimelineSkeleton,
} from '../components/commonComponents/commonSkeletonsComponents';

import { Box, Stack, Typography } from '@mui/material';

const SkeletonContainer = () => {
  return (
    <>
      <Stack gap={3} m={10}>
        <Box>
          <Typography>Text Skeleton</Typography>
          <TextSkeleton lines={3} gap={0.5} />
        </Box>

        <Box>
          <Typography>Table Skeleton</Typography>
          <TableSkeleton rows={6} />
        </Box>

        <Box>
          <Typography>Avatar Skeleton</Typography>
          <AvatarSkeleton />
        </Box>

        <Box>
          <Typography>Breadcrumb Skeleton</Typography>
          <BreadcrumbsSkeleton />
        </Box>

        <Box>
          <Typography>Button Skeleton</Typography>
          <ButtonSkeleton />
        </Box>

        <Box>
          <Typography>Card Skeleton</Typography>
          <CardSkeleton />
        </Box>

        <Box>
          <Typography>Chart Skeleton</Typography>
          <ChartSkeleton />
        </Box>

        <Box>
          <Typography>Composite Skeleton</Typography>
          <CompositeSkeleton />
        </Box>

        <Box>
          <Typography>Dialog Skeleton</Typography>
          <DialogSkeleton />
        </Box>

        <Box>
          <Typography>Form Skeleton</Typography>
          <FormSkeleton />
        </Box>

        <Box>
          <Typography>Grid Skeleton</Typography>
          <GridSkeleton />
        </Box>

        <Box>
          <Typography>Image Skeleton</Typography>
          <ImageSkeleton />
        </Box>

        <Box>
          <Typography>Kanban Column Skeleton</Typography>
          <KanbanColumnSkeleton />
        </Box>

        <Box>
          <Typography>List Skeleton</Typography>
          <ListSkeleton />
        </Box>

        <Box>
          <Typography>Navbar Skeleton</Typography>
          <NavbarSkeleton />
        </Box>

        <Box>
          <Typography>Notification Skeleton</Typography>
          <NotificationSkeleton />
        </Box>

        <Box>
          <Typography>Sidebar Skeleton</Typography>
          <SidebarSkeleton />
        </Box>

        <Box>
          <Typography>Tabs Skeleton</Typography>
          <TabsSkeleton />
        </Box>

        <Box>
          <Typography>Timeline Skeleton</Typography>
          <TimelineSkeleton />
        </Box>
      </Stack>
    </>
  );
};

export default SkeletonContainer;
